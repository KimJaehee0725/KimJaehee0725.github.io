---
layout: home
author_profile: true
lang: ko
translation_url: /
permalink: /ko/
excerpt: >-
  서울대학교 산업공학과 박사과정. 언어 모델의 추론, 감독 신호, 에이전트 시스템을 연구합니다.
---

{% include language-toggle.html %}

저는 서울대학교 산업공학과 강필성 교수님의 DSBA 연구실에서 박사과정을 밟고 있는 김재희입니다. 언어 모델이 어떻게 추론하고, 적응하고, 실제 환경에서 행동할 수 있는지를 연구합니다 — process-level supervision, LLM을 위한 강화학습, 그리고 현실적인 제약 아래에서 동작하는 agentic systems를 중심으로.

## 요즘 하는 일

- Ph.D. 연구의 핵심 질문은 언어 모델이 단순 모방을 넘어 multi-step 문제를 추론하고, process-level signals로부터 학습하고, 실세계에서 신뢰할 수 있게 행동하는 방법입니다.
- 실제에 가까운 프로젝트를 좋아합니다 — 팀이 유지할 수 있는 벤치마크, 전문 코퍼스를 위한 retrieval 시스템, 현실적인 제약 아래에서 동작해야 하는 LLM 파이프라인.
- 현재 stream-based agent benchmark를 만들고 있습니다 — 언어 모델 에이전트가 순차적인 실세계 과제에서 얼마나 잘 추론하고, 도구를 사용하고, 관찰 스트림에 적응하는지를 평가하기 위한 프레임워크입니다.
- 다양한 도메인의 연구자들과의 협업을 찾고 있습니다. 추론, 검색, 의사결정 문제에 언어 모델이 도움이 될 것 같은 분야가 있다면 편히 연락 주세요.
- **Unknown NLP**라는 NLP paper review study group을 함께 운영하고 있습니다. 세션 정리 글은 [unknown-nlp.github.io](https://unknown-nlp.github.io)에 공개합니다.

## Recent Updates

- **2026년 5월**: 새 under-review manuscripts와 archived publications를 반영해 CV를 업데이트했습니다.
- **2026년**: **AlienLM**이 ICML 2026에 accept되었습니다.
- **2026년**: belief-shift rewards와 semiconductor equipment log retrieval 관련 manuscript가 under review입니다.
- **2025년**: **CheckEval**은 EMNLP 2025, **Verbosity-Aware Rationale Reduction**은 ACL 2025에 게재되었습니다.
- **2024년**: memory-efficient dense retriever training method인 **ContAccum**이 NeurIPS 2024에 게재되었습니다.

## Research Themes

### Reasoning Signals & Process Supervision

Process-level supervision과 강화학습을 통해 reasoning-oriented 모델을 개선하는 방법을 연구합니다 — 단순한 outcome-based reward를 넘어, 모델이 단계별로 어떻게 추론하는지를 형성하는 belief-aware training signals를 탐구합니다. 추론 품질을 유지하면서 inference 효율을 높이는 rationale reduction과 decoding strategies에도 관심이 있습니다.

### Semantic Embedding & Retrieval

Domain-specific하고 document-heavy한 환경을 위한 retrieval systems를 연구합니다. Scientific metadata, industrial logs, hierarchical business documents처럼 데이터가 특수하거나 정돈되어 있지 않은 상황에서도 유용한 embedders를 만드는 데 관심이 있습니다.

### Trustworthy & Privacy-Preserving LLM Systems

민감한 도메인에서 사용할 수 있는 LLM evaluation 및 deployment methods를 연구합니다. Checklist-based LLM-as-a-Judge evaluation, transformed representation space를 활용한 API-boundary privacy, 그리고 task performance만큼 reliability와 auditability가 중요한 agent benchmark에 관심이 있습니다.

## Selected Publications

- [**AlienLM: Alienization of Language for API-Boundary Privacy in Black-Box LLMs**](https://arxiv.org/abs/2601.22710). *Jaehee Kim* Α, Pilsung Kang Ω. ICML 2026.
- **Belief-Shift Reward: Sculpting the Flat Reward Landscape via Telescoping Information Gain**. Keonwoo Kim Α, *Jaehee Kim*, Dongyoon Han, Haanju Yoo Ω. Under review, 2026.
- [**CheckEval: A reliable LLM-as-a-Judge framework for evaluating text generation using checklists**](https://aclanthology.org/2025.emnlp-main.796/). Yukyung Lee Α, JoongHoon Kim, *Jaehee Kim*, Hyowon Cho, Jaewook Kang, Pilsung Kang Ω, Najoung Kim Ω. EMNLP 2025.
- [**Verbosity-Aware Rationale Reduction: Sentence-Level Rationale Reduction for Efficient and Effective Reasoning**](https://aclanthology.org/2025.findings-acl.1068/). Joonwon Jang Α, *Jaehee Kim*, Wonbin Kweon, Seonghyeon Lee, Hwanjo Yu Ω. ACL 2025.
- [**A Gradient Accumulation Method for Dense Retriever under Memory Constraint**](https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html). *Jaehee Kim* Α, Yukyung Lee, Pilsung Kang Ω. NeurIPS 2024.

Workshop과 국내 학술지 논문을 포함한 전체 목록은 [Publications](/ko/publications/)에서 볼 수 있습니다.

## Applied AI Projects

- **Development of Worker-Friendly Innovative AI Agents for Autonomous Manufacturing** (IITP, Apr 2025–Dec 2025): 공장 운영자를 돕는 autonomous manufacturing AI agents를 위해 multi-agent orchestration, multi-party engine, RAG pipeline을 개발했습니다.
- **Data Construction and Optimization for Training/Inference of AI Chatbot** (Samsung Fire & Marine Insurance, Mar 2025–Mar 2026): 보험 도메인 문서를 대상으로 PDF parsing, hierarchical document preprocessing, chatbot training data construction을 수행하고 있습니다.
- **Developing an Information Retrieval System for Scholarly Achievement and Research Projects in the College of Engineering** (College of Engineering, SNU, Jan 2025–Jul 2025): 연구실 및 연구성과 metadata를 기반으로 scientific-domain dense retriever와 evaluation pipeline을 개발했습니다.
- **Developing a Large Language Model Evaluation Framework for Financial Domain** (KakaoBank, Nov 2023–Aug 2024): Finance-domain LLM의 safety, truthfulness, mathematical reasoning을 평가하기 위한 benchmark와 evaluation framework를 구축했습니다.
- **Developing Customer Content via Data Analysis Techniques 2nd Stage** (LG Electronics, Dec 2022–Nov 2023): Customer review를 활용한 unsupervised dense retrieval, review clustering, text/meta information visualization을 수행했습니다.
- **Developing Customer Content via Data Analysis Techniques 1st Stage** (LG Electronics, Apr 2022–Nov 2022): Sentence anomaly detection, pain point discovery, clustering via self-training을 활용해 customer insight mining pipeline을 개발했습니다.

## Collaboration

NLP, RL, systems, 응용 도메인을 막론하고, 언어 모델을 더 신뢰할 수 있고 자율적인 방향으로 발전시키고 싶은 연구자들과 함께 일하는 것을 즐깁니다. 추론, 검색, agentic AI가 도움이 될 것 같은 문제가 있다면 [편히 연락 주세요](mailto:jaehee_kim@snu.ac.kr).
