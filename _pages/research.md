---
title: "Research"
published: false
permalink: /research/
lang: en
translation_url: /ko/research/
excerpt: "How I think about language models that reason, retrieve, and operate over time."
---

{% include language-toggle.html %}

I study language models beyond static tasks. I like finding hidden assumptions in existing research, and designing experimental settings where ambiguous capabilities become visible. Most of my work falls into three overlapping directions.

## Reasoning and reinforcement learning

I am interested in how models reason, and in RL as a way to study long-horizon agent behavior. The harder question often comes before the reward: defining the agent's role, action space, environment dynamics, and feedback structure in a realistic way. I also work on rationale reduction and decoding strategies that keep reasoning quality while staying efficient.

## Agents that operate over time

Most agent benchmarks ask whether an agent can finish a task. I am more interested in whether it can keep doing the job: noticing when the world changes, deciding when to intervene, and holding a goal that may not have a clean endpoint. This is the direction behind OperationBench, my current early-stage project.

## Retrieval as a channel to external information

I view retrieval broadly, as channeling external information into a language model. Depending on what is retrieved, it can act as memory, personalization, reasoning support, or an observation mechanism for changing environments. My earlier work trained dense retrievers for specialized and document-heavy settings, where data is sparse or operationally messy.

## Data Science and Business Analytics Lab

I am a member of the [Data Science and Business Analytics Lab](https://dsbal.snu.ac.kr) led by Prof. Pilsung Kang, where I have worked on a range of applied research projects with industry and public partners.

### Selected applied projects

- **Worker-Friendly AI Agents for Autonomous Manufacturing** (IITP, Apr 2025 to Dec 2025)  
  Built multi-agent orchestration, a multi-party engine, and a RAG pipeline for manufacturing agents that assist factory workers.

- **Training and Inference Data for an AI Chatbot** (Samsung Fire & Marine Insurance, Mar 2025 to Mar 2026)  
  PDF parsing, hierarchical document preprocessing, and chatbot training data construction for insurance-domain documents.

- **Information Retrieval for Scholarly Achievements** (College of Engineering, SNU, Jan 2025 to Jul 2025)  
  Scientific-domain dense retrievers and evaluation pipelines built on research lab and achievement metadata.

- **LLM Evaluation Framework for the Financial Domain** (KakaoBank, Nov 2023 to Aug 2024)  
  Safety, truthfulness, and mathematical reasoning benchmarks for finance-domain LLMs.

- **Customer Content via Data Analysis, Stages 1 and 2** (LG Electronics, Apr 2022 to Nov 2023)  
  Unsupervised dense retrieval, review clustering, anomaly detection, and self-training pipelines for customer insight discovery.

If you are interested in collaborations or internships, feel free to [reach out](mailto:jaehee_kim@snu.ac.kr).
