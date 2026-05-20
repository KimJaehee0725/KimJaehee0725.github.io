---
layout: home
author_profile: true
lang: en
translation_url: /ko/
excerpt: >-
  Ph.D. candidate at Seoul National University researching reasoning, scalable supervision, and agentic systems for large language models.
---

{% include language-toggle.html %}

I am a Ph.D. candidate in Industrial Engineering at Seoul National University, advised by **Prof. Pilsung Kang** in the Data Science and Business Analytics Lab. My research centers on how language models reason, adapt, and act in real-world environments — studying process-level supervision, reinforcement learning for LLMs, and agentic systems that operate under practical constraints.

## What I'm Up To

- My Ph.D. research asks how language models can go beyond imitation — reasoning through multi-step problems, learning from process-level signals, and acting reliably in real-world settings.
- I gravitate toward projects that sit close to practice: benchmarks teams can actually maintain, retrieval systems for specialized corpora, and LLM pipelines that have to work under real-world constraints.
- I am currently building a stream-based benchmark for evaluating language model agents on sequential, real-world tasks — measuring how well they reason, use tools, and adapt across a stream of observations.
- I am looking to collaborate with researchers from diverse domains. If your field involves reasoning, retrieval, or decision-making problems that language models might help solve, I would be glad to explore potential joint work.
- I co-organize an NLP paper review study group called **Unknown NLP**. We publish our session write-ups at [unknown-nlp.github.io](https://unknown-nlp.github.io).

## Recent Updates

- **May 2026**: Updated my CV with new under-review manuscripts and archived publications.
- **2026**: **AlienLM** was accepted to ICML 2026.
- **2026**: New manuscripts on belief-shift rewards and semiconductor equipment log retrieval are under review.
- **2025**: **CheckEval** appeared at EMNLP 2025 and **Verbosity-Aware Rationale Reduction** appeared at ACL 2025.
- **2024**: **ContAccum**, a memory-efficient dense retriever training method, appeared at NeurIPS 2024.

## Research Themes

### Reasoning Signals & Process Supervision

I study process-level supervision and reinforcement learning for reasoning-oriented models — moving beyond outcome-based rewards toward belief-aware training signals that shape how models reason step by step. I am also interested in rationale reduction and decoding strategies that preserve reasoning quality while keeping inference efficient.

### Semantic Embedding & Retrieval

I work on retrieval systems for domain-specific and document-heavy settings, including scientific metadata, industrial logs, and hierarchical business documents. I am especially interested in training embedders that remain useful when data is specialized, sparse, or operationally messy.

### Trustworthy & Privacy-Preserving LLM Systems

I build evaluation and deployment methods for LLM systems used in sensitive domains. This includes checklist-based LLM-as-a-judge evaluation, API-boundary privacy via transformed representation spaces, and agent benchmarks where reliability and auditability matter as much as task performance.

## Selected Publications

- [**AlienLM: Alienization of Language for API-Boundary Privacy in Black-Box LLMs**](https://arxiv.org/abs/2601.22710). *Jaehee Kim* Α, Pilsung Kang Ω. ICML 2026.
- **Belief-Shift Reward: Sculpting the Flat Reward Landscape via Telescoping Information Gain**. Keonwoo Kim Α, *Jaehee Kim*, Dongyoon Han, Haanju Yoo Ω. Under review, 2026.
- [**CheckEval: A reliable LLM-as-a-Judge framework for evaluating text generation using checklists**](https://aclanthology.org/2025.emnlp-main.796/). Yukyung Lee Α, JoongHoon Kim, *Jaehee Kim*, Hyowon Cho, Jaewook Kang, Pilsung Kang Ω, Najoung Kim Ω. EMNLP 2025.
- [**Verbosity-Aware Rationale Reduction: Sentence-Level Rationale Reduction for Efficient and Effective Reasoning**](https://aclanthology.org/2025.findings-acl.1068/). Joonwon Jang Α, *Jaehee Kim*, Wonbin Kweon, Seonghyeon Lee, Hwanjo Yu Ω. ACL 2025.
- [**A Gradient Accumulation Method for Dense Retriever under Memory Constraint**](https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html). *Jaehee Kim* Α, Yukyung Lee, Pilsung Kang Ω. NeurIPS 2024.

For the complete list, including workshops and domestic journal papers, see [Publications](/publications/).

## Applied AI Projects

- **Development of Worker-Friendly Innovative AI Agents for Autonomous Manufacturing** (IITP, Apr 2025–Dec 2025): Built multi-agent orchestration, multi-party engine, and RAG pipeline for autonomous manufacturing AI agents assisting factory workers.
- **Data Construction and Optimization for Training/Inference of AI Chatbot** (Samsung Fire & Marine Insurance, Mar 2025–Mar 2026): Conducting PDF parsing, hierarchical document preprocessing, and chatbot training data construction for insurance-domain documents.
- **Developing an Information Retrieval System for Scholarly Achievement and Research Projects in the College of Engineering** (College of Engineering, SNU, Jan 2025–Jul 2025): Developed scientific-domain dense retrievers and evaluation pipelines based on research lab and achievement metadata.
- **Developing a Large Language Model Evaluation Framework for Financial Domain** (KakaoBank, Nov 2023–Aug 2024): Built safety, truthfulness, and mathematical reasoning benchmarks and evaluation frameworks for finance-domain LLMs.
- **Developing Customer Content via Data Analysis Techniques 2nd Stage** (LG Electronics, Dec 2022–Nov 2023): Performed unsupervised dense retrieval, review clustering, and text/meta information visualization using customer reviews.
- **Developing Customer Content via Data Analysis Techniques 1st Stage** (LG Electronics, Apr 2022–Nov 2022): Developed customer insight mining pipeline using sentence anomaly detection, pain point discovery, and clustering via self-training.

## Collaboration

I enjoy working with researchers across disciplines — NLP, RL, systems, and applied domains — who want to push language models toward more reliable and autonomous behavior. If you see a problem where reasoning, retrieval, or agentic AI might help, feel free to [reach out](mailto:jaehee_kim@snu.ac.kr).
