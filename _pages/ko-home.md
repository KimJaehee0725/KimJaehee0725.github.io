---
layout: home
author_profile: true
lang: ko
translation_url: /
permalink: /ko/
excerpt: >-
  서울대학교 산업공학과 박사과정. privacy-preserving, trustworthy, retrieval-oriented AI systems를 연구합니다.
feature_row:
  - title: "Research"
    excerpt: "Semantic retrieval, reasoning rewards, privacy-aware LLM systems, evaluation frameworks."
    url: "/ko/research/"
    btn_label: "연구 보기"
  - title: "Publications"
    excerpt: "API-boundary privacy, checklist-based evaluation, dense retrieval, efficient reasoning 관련 논문."
    url: "/ko/publications/"
    btn_label: "논문 보기"
  - title: "CV"
    excerpt: "학력, 프로젝트, 연락처, 최신 CV."
    url: "/ko/cv/"
    btn_label: "CV 보기"
---

{% include language-toggle.html %}

{% include feature_row %}

저는 서울대학교 산업공학과 강필성 교수님의 DSBA 연구실에서 박사과정으로 재학 중인 김재희라고 합니다. 박사과정 동안 text embedder, LLM reasoning, LLM evaluation, API-boundary privacy 등의 연구 분야에서 좋은 연구를 수행하고 싶습니다. 언제든 연구에 관심이 있으시면 편히 연락주세요!

## 요즘 하는 일

- Ph.D. research의 큰 질문은 language models가 reliability, privacy, efficiency를 포기하지 않으면서 실제 deployment setting에서 어떻게 유용해질 수 있는가입니다.
- 전문 문서용 dense retrieval, 실제 팀이 유지할 수 있는 evaluation framework, 그리고 현실적인 제약 아래에서 동작해야 하는 LLM systems에 관심이 많습니다.
- **Unknown NLP**라는 NLP paper review study group을 함께 운영하고 있습니다. 세션 정리 글은 [unknown-nlp.github.io](https://unknown-nlp.github.io)에 공개합니다.

## Recent Updates

- **2026년 5월**: 새 under-review manuscripts와 archived publications를 반영해 CV를 업데이트했습니다.
- **2026년**: **AlienLM**이 ICML 2026에 accept되었습니다.
- **2026년**: belief-shift rewards와 semiconductor equipment log retrieval 관련 manuscript가 under review입니다.
- **2025년**: **CheckEval**은 EMNLP 2025, **Verbosity-Aware Rationale Reduction**은 ACL 2025에 게재되었습니다.
- **2024년**: memory-efficient dense retriever training method인 **ContAccum**이 NeurIPS 2024에 게재되었습니다.

## Research Themes

### Semantic Embedding & Retrieval

Domain-specific하고 document-heavy한 환경을 위한 retrieval systems를 연구합니다. Scientific metadata, industrial logs, hierarchical business documents처럼 데이터가 특수하거나 정돈되어 있지 않은 상황에서도 유용한 embedders를 만드는 데 관심이 있습니다.

### Reasoning Signals & Efficient Inference

Reasoning-oriented language models를 더 효율적이고 잘 supervised되도록 만드는 방법을 연구합니다. 최근 관심사는 reinforcement learning을 위한 reward signals, rationale reduction, reasoning quality를 유지하면서 computation을 줄이는 training strategies입니다.

### Trustworthy & Privacy-Preserving LLM Systems

민감한 도메인에서 사용할 수 있는 LLM evaluation 및 deployment methods를 연구합니다. Checklist-based LLM-as-a-Judge evaluation, API-boundary privacy, 그리고 benchmark performance만큼 reliability와 auditability가 중요한 pipeline에 관심이 있습니다.

## Selected Publications

- [**AlienLM: Alienization of Language for API-Boundary Privacy in Black-Box LLMs**](https://arxiv.org/abs/2601.22710). *Jaehee Kim* Α, Pilsung Kang Ω. ICML 2026.
- **Belief-Shift Reward: Sculpting the Flat Reward Landscape via Telescoping Information Gain**. Keonwoo Kim Α, *Jaehee Kim*, Dongyoon Han, Haanju Yoo Ω. Under review, 2026.
- [**CheckEval: A reliable LLM-as-a-Judge framework for evaluating text generation using checklists**](https://aclanthology.org/2025.emnlp-main.796/). Yukyung Lee Α, JoongHoon Kim, *Jaehee Kim*, Hyowon Cho, Jaewook Kang, Pilsung Kang Ω, Najoung Kim Ω. EMNLP 2025.
- [**Verbosity-Aware Rationale Reduction: Sentence-Level Rationale Reduction for Efficient and Effective Reasoning**](https://aclanthology.org/2025.findings-acl.1068/). Joonwon Jang Α, *Jaehee Kim*, Wonbin Kweon, Seonghyeon Lee, Hwanjo Yu Ω. ACL 2025.
- [**A Gradient Accumulation Method for Dense Retriever under Memory Constraint**](https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html). *Jaehee Kim* Α, Yukyung Lee, Pilsung Kang Ω. NeurIPS 2024.

Workshop과 국내 학술지 논문을 포함한 전체 목록은 [Publications](/ko/publications/)에서 볼 수 있습니다.

## Applied AI Projects

- **Development of Worker-Friendly Innovative AI Agents for Autonomous Manufacturing** (IITP, Apr 2025-Dec 2025): 공장 운영자를 돕는 autonomous manufacturing AI agents를 위해 multi-agent orchestration, multi-party engine, RAG pipeline을 개발했습니다.
- **Data Construction and Optimization for Training/Inference of AI Chatbot** (Samsung Fire & Marine Insurance, Mar 2025-Mar 2026): 보험 도메인 문서를 대상으로 PDF parsing, hierarchical document preprocessing, chatbot training data construction을 수행하고 있습니다.
- **Developing an Information Retrieval System for Scholarly Achievement and Research Projects in the College of Engineering** (College of Engineering, SNU, Jan 2025-Jul 2025): 연구실 및 연구성과 metadata를 기반으로 scientific-domain dense retriever와 evaluation pipeline을 개발했습니다.
- **Developing a Large Language Model Evaluation Framework for Financial Domain** (KakaoBank, Nov 2023-Aug 2024): Finance-domain LLM의 safety, truthfulness, mathematical reasoning을 평가하기 위한 benchmark와 evaluation framework를 구축했습니다.
- **Developing Customer Content via Data Analysis Techniques 2nd Stage** (LG Electronics, Dec 2022-Nov 2023): Customer review를 활용한 unsupervised dense retrieval, review clustering, text/meta information visualization을 수행했습니다.
- **Developing Customer Content via Data Analysis Techniques 1st Stage** (LG Electronics, Apr 2022-Nov 2022): Sentence anomaly detection, pain point discovery, clustering via self-training을 활용해 customer insight mining pipeline을 개발했습니다.
