---
layout: home
author_profile: true
lang: en
translation_url: /ko/
excerpt: >-
  Ph.D. candidate at Seoul National University studying language models for privacy-preserving, trustworthy, and retrieval-oriented AI systems.
feature_row:
  - title: "Research"
    excerpt: "Semantic retrieval, reasoning rewards, privacy-aware LLM systems, and evaluation frameworks."
    url: "/research/"
    btn_label: "Learn more"
  - title: "Publications"
    excerpt: "Peer-reviewed papers on API-boundary privacy, checklist-based evaluation, dense retrieval, and efficient reasoning."
    url: "/publications/"
    btn_label: "Read papers"
  - title: "CV"
    excerpt: "Academic background, appointments, and collaborative projects."
    url: "/cv/"
    btn_label: "View CV"
---

{% include language-toggle.html %}

{% include feature_row %}

I am a Ph.D. candidate in Industrial Engineering at Seoul National University, advised by **Prof. Pilsung Kang** in the Data Science and Business Analytics Lab. My current work centers on text embedders, LLM reasoning, API-boundary privacy, and solving practical challenges that arise when bringing large language models into production settings.

## What I'm Up To

- I am currently shaping my Ph.D. research around the question of how language models can become useful in real deployment settings without giving up reliability, privacy, or efficiency.
- I like projects that sit close to practice: dense retrieval for specialized documents, evaluation frameworks that teams can actually maintain, and LLM systems that have to work under real constraints.
- I co-organize an NLP paper review study group called **Unknown NLP**. We publish our session write-ups at [unknown-nlp.github.io](https://unknown-nlp.github.io).

## Recent Updates

- **May 2026**: Updated my CV with new under-review manuscripts and archived publications.
- **2026**: **AlienLM** was accepted to ICML 2026.
- **2026**: New manuscripts on belief-shift rewards and semiconductor equipment log retrieval are under review.
- **2025**: **CheckEval** appeared at EMNLP 2025 and **Verbosity-Aware Rationale Reduction** appeared at ACL 2025.
- **2024**: **ContAccum**, a memory-efficient dense retriever training method, appeared at NeurIPS 2024.

## Research Themes

### Semantic Embedding & Retrieval

I work on retrieval systems for domain-specific and document-heavy settings, including scientific metadata, industrial logs, and hierarchical business documents. I am especially interested in training embedders that remain useful when data is specialized, sparse, or operationally messy.

### Reasoning Signals & Efficient Inference

I study ways to make reasoning-oriented language models more efficient and better supervised. Recent directions include reward signals for reinforcement learning, rationale reduction, and training strategies that preserve reasoning quality while reducing unnecessary computation.

### Trustworthy & Privacy-Preserving LLM Systems

I build evaluation and deployment methods for LLM systems used in sensitive domains. This includes checklist-based LLM-as-a-judge evaluation, API-boundary privacy, and pipelines where reliability and auditability matter as much as benchmark performance.

## Selected Publications

- [**AlienLM: Alienization of Language for API-Boundary Privacy in Black-Box LLMs**](https://arxiv.org/abs/2601.22710). *Jaehee Kim* Α, Pilsung Kang Ω. ICML 2026.
- **Belief-Shift Reward: Sculpting the Flat Reward Landscape via Telescoping Information Gain**. Keonwoo Kim Α, *Jaehee Kim*, Dongyoon Han, Haanju Yoo Ω. Under review, 2026.
- [**CheckEval: A reliable LLM-as-a-Judge framework for evaluating text generation using checklists**](https://aclanthology.org/2025.emnlp-main.796/). Yukyung Lee Α, JoongHoon Kim, *Jaehee Kim*, Hyowon Cho, Jaewook Kang, Pilsung Kang Ω, Najoung Kim Ω. EMNLP 2025.
- [**Verbosity-Aware Rationale Reduction: Sentence-Level Rationale Reduction for Efficient and Effective Reasoning**](https://aclanthology.org/2025.findings-acl.1068/). Joonwon Jang Α, *Jaehee Kim*, Wonbin Kweon, Seonghyeon Lee, Hwanjo Yu Ω. ACL 2025.
- [**A Gradient Accumulation Method for Dense Retriever under Memory Constraint**](https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html). *Jaehee Kim* Α, Yukyung Lee, Pilsung Kang Ω. NeurIPS 2024.

For the complete list, including workshops and domestic journal papers, see [Publications](/publications/).

## Applied AI Projects

- **Autonomous manufacturing agents**: Multi-agent orchestration and retrieval-augmented workflows for worker-friendly factory AI systems.
- **Insurance-domain chatbot data**: PDF parsing, hierarchical document preprocessing, and training data construction for enterprise chatbot systems.
- **Scholarly achievement retrieval**: Dense retrieval and evaluation pipelines for research metadata and scientific documents.

## Collaboration

I enjoy working with people who want to turn research prototypes into systems that can survive real users, real documents, and real constraints. Feel free to [reach out](mailto:jaehee_kim@snu.ac.kr) if you are interested in collaborating.
