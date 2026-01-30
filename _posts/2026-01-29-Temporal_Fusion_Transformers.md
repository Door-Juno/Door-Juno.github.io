---
layout: post
title: "Temporal Fusion Transformer"
date: 2026-01-29
description: 시계열의 SOTA인 TFT 모델에 대해 알아보자.
tags: Deeplearning
categories: blog
toc:
  sidebar: right
---
# Intro 
시계열 예측에서 기존의 LSTM, GRU 기반 모델들은 단일 시점 예측에는 강한 성능을 가지지만, **미래의 여러 시점 (Multi-Horizon)**을 동시에 예측하는데에는 한계가 있다. 

현재 Forecasting분야의 SOTA(State of the art) 모델인 **Temporal Fusion Transformer**모델은 **Transformer의 Attention 메커니즘**을 도입하여 장기 의존성(Long-term dependency)을 포착하고, 다양한 형태의 변수를 처리할 수 있다. 
특히, 딥러닝 모델의 고질적인 문제인 **블랙박스** 문제를 해결하고 **해석 가능성**을 제공한다는 점에서 유통, 헬스 케어, 금융 등 신뢰성이 중요한 분야에서 큰 잠재력을 가지고 있다. 

# Idea 
 Multi-Horizon Forecasting을 위한 TFT모델의 Input으로 다음 변수들이 필요하다. 
 <img src="https://velog.velcdn.com/images/door_jono/post/84b10921-cfbf-460a-8452-cc3ec6ee8b29/image.png" width = "50%">
 
**Observed Input** : 관측을 통해 알 수 있는 값이지만, 현 시점에서 미래의 값은 알 수 없는 변수. (Target)
**Time Vary Known Input** : 시간에 따라 달라지지만, 현재에도 혹은 미래에도 그 값을 알 수 있는 변수 (Week, Holiday 등)
**Static Covariates** : 시간과 관계없이 변하지 않는 정적 공변량 (성별, 나이 등)

기존 다른 모델들은 이 Static 데이터들을 제대로 활용하기 힘들었지만, TFT 는 이 데이터를 모델 전체에 Context로 뿌려 활용한다는 특징이 있다 .

# Architecture
<img src="https://velog.velcdn.com/images/door_jono/post/457093b1-ca5c-4fe7-bb90-4ce0ab63454c/image.png" width="60%">
**Gating Mechanism(GLU)**
데이터의 흐름을 제어하여 현 시점에서 불필요한 정보는 억제한다. 

**Variable Selection Network(VSN)**
수많은 Feature 중에서, 어떤 변수가 예측에 중요한지 스스로 선택한다. 

**Static Covariate Encoder** 
정적 변수를 인코딩 하여 시간적 변수와 결합한다. 

**Temporal Fusion Decoder** 
LSTM의 지역적인 패턴과 Multi-Head Attention을 결합하여 최종적인 예측을 한다. 

# Interpretability 
TFT의 장점은 예측의 이유를 시각화 할 수 있다는 것이다. 
주로 사용하는 차트는 **Variable Importance(변수 중요도)**와 **Attention Weights**이다. 

![이미지 1](https://velog.velcdn.com/images/door_jono/post/aae60bce-10c2-458e-b337-cbe6f75e657f/image.png)
![이미지 2](https://velog.velcdn.com/images/door_jono/post/4723a14c-0c8f-4c69-9d4f-12e0509e44fa/image.png)
Attention Weights 에서, 모델은 예측을 위해 어느 시점의 Attention에 가중치를 두엇는지 측정할 수 있으며, 여러 Variables 중 어느 변수에 더 가중치를 두엇는지 확인할 수 있다. 

또, TFT는 단순히 하나의 값을 예측하는 것이 아니라, **Quantile Loss**를 사용하여 예측의 범위(신뢰구간)을 제공한다. 이를 통해 예측의 **불확실성** 까지 파악할 수 있어 리스크 관리에 용이하다.

# Implementation
``` python 
import torch
from pytorch_forecasting import TemporalFusionTransformer, TimeSeriesDataSet

# 1. 데이터셋 정의 
training = TimeSeriesDataSet(
    data[lambda x: x.time_idx <= training_cutoff],
    time_idx="time_idx",
    target="vital_sign", # 예측하고자 하는 변수 
    group_ids=["patient_id"],
	
    ...
    
    static_categoricals=["gender"], # 정적 변수  
    time_varying_known_reals=["time_of_day"], # 미래에도 아는 변수
    time_varying_unknown_reals=["heart_rate", "bp_systolic"], # 관측 변수
    
    ...
)

# 2. 모델 설정 
tft = TemporalFusionTransformer.from_dataset(
    training,
    learning_rate=0.03,
    hidden_size=16,
    attention_head_size=1,
    dropout=0.1,
    output_size=7, 
    loss=QuantileLoss(),
)

# 3. 학습 ...
```