---
layout: jk
lang: en
translation_url: /ko/
excerpt: >-
  Ph.D. student at Seoul National University studying agents that act without the whole picture, in environments that change over time.
toc_tokens: true
---


<p class="tok tok--first" aria-hidden="true">&lt;bos&gt;</p>

<div class="hero">
  <p class="hero__lead">I study agents that must act <mark>without seeing the whole state</mark>, in environments that <mark>change over time</mark> and where no one knows the optimal answer.</p>
  <p class="hero__sub">People rarely see the whole picture either; we decide anyway and adjust as the results come in. Agents should be able to do the same.</p>
</div>

## About

I am a Ph.D. student in Industrial Engineering at Seoul National University, advised by Prof. Pilsung Kang in the Data Science and Business Analytics Lab. Studying industrial engineering, I got used to starting from <mark>how a process actually runs</mark>, constraints and all.

My projects usually start from the gap between <mark>what a method assumes</mark> and <mark>the setting people actually work in</mark>. ContAccum began when I needed large-batch contrastive training on limited memory: gradient accumulation was not enough, and gradient caching was hard to build on. AlienLM began from privacy frameworks designed for conventional machine learning, which did not account for the compute, data size, and modality of exchanging text with an LLM API.

Now I build environments that resemble <mark>industrial processes</mark>: complex, partially observable, and changing over time. Nobody knows the optimal decision in them, so even the evaluator can only score each step greedily. An agent needs reasoning, retrieval, and reinforcement learning to work in such a setting, so I study the three together there.

I like simple sentences for difficult problems, and I usually want to know what we mean by a capability before trying to improve it.

<p class="tok-close" aria-hidden="true">&lt;|eot_id|&gt;</p>

<details class="think">
  <summary><span aria-hidden="true">&lt;think&gt;</span><span class="think__label">Thought for 10 semesters</span><span class="think__hint">research directions</span></summary>
  <div class="think__body">
    <p>The three directions I keep coming back to.</p>
    <h3>Reasoning and reinforcement learning</h3>
    <p>I am interested in how models reason, and in RL as a way to study long-horizon behavior. The harder question often comes before the reward: defining the agent's role, action space, environment dynamics, and feedback structure in a realistic way. I also work on rationale reduction and decoding strategies that keep reasoning quality while staying efficient.</p>
    <h3>Retrieval</h3>
    <p>I view retrieval broadly, as channeling external information into a language model. In a changing environment, it is also how an agent finds out what has changed, for example from a new log entry or sensor reading.</p>
    <h3>Agents that operate over time</h3>
    <p>Most agent benchmarks ask whether an agent can finish a task. I am more interested in whether it can keep doing the job: noticing when the environment changes, deciding when to step in, and keeping track of a goal that may not have a clear end.</p>
    <p class="think__now"><em>The output is not the answer. The output is the trajectory.</em> My current project builds an environment modeled on industrial processes to study this.</p>
    <p class="think__close" aria-hidden="true">&lt;/think&gt;</p>
  </div>
</details>

<p class="tok" aria-hidden="true">&lt;answer&gt;</p>

## Selected research

<ul class="selected">
  <li data-copy-scope>
    <p class="selected__head"><a href="/alienlm/">AlienLM</a><span class="selected__venue">ICML 2026</span></p>
    <p class="selected__desc">The first text-only method for API-boundary privacy that works on general tasks: alienized text stays useful to the model but is hard for an outside observer to recover, retaining over 81% of plaintext performance.</p>
    <ul class="chips">
      <li><a class="chip" href="https://arxiv.org/abs/2601.22710">paper</a></li>
      <li><a class="chip" href="https://github.com/KimJaehee0725/AlienLM">code</a></li>
      <li><a class="chip" href="/alienlm/#demo">demo</a></li>
      <li><a class="chip" href="/alienlm/#poster">poster</a></li>
      <li><a class="chip" href="/alienlm/#figures">figures</a></li>
      <li><button type="button" class="chip" data-copy="@inproceedings{kim2026alienlm,&#10;  title     = {AlienLM: Alienization of Language for API-Boundary Privacy in Black-Box LLMs},&#10;  author    = {Kim, Jaehee and Kang, Pilsung},&#10;  booktitle = {Proceedings of the 43rd International Conference on Machine Learning},&#10;  year      = {2026}&#10;}" data-copied="BibTeX copied">bib ⧉</button></li>
    </ul>
    <span class="copy-status" data-copy-status aria-live="polite"></span>
  </li>
  <li>
    <p class="selected__head"><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html">ContAccum</a><span class="selected__venue">NeurIPS 2024</span></p>
    <p class="selected__desc">Improves contrastive learning by accumulating comparison queries, not just comparison targets.</p>
    <ul class="chips">
      <li><a class="chip" href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html">paper</a></li>
    </ul>
  </li>
  <li>
    <p class="selected__head"><a href="https://aclanthology.org/2025.emnlp-main.796/">CheckEval</a><span class="selected__venue">EMNLP 2025</span></p>
    <p class="selected__desc">Reframes LLM-as-a-judge around stability under model and sample changes, not human correlation alone.</p>
    <ul class="chips">
      <li><a class="chip" href="https://aclanthology.org/2025.emnlp-main.796/">paper</a></li>
    </ul>
  </li>
</ul>

<p class="see-all"><a href="/publications/">See all publications</a></p>

<p class="tok-close" aria-hidden="true">&lt;/answer&gt;</p>

<p class="tok" aria-hidden="true">trajectory.log</p>

## News

<ul class="traj">
  <li><span class="traj__date">2026-10</span><span class="traj__step">step 9</span><span>Updated my CV with project outcomes and reviewing service. <a href="/cv/">[CV]</a></span></li>
  <li><span class="traj__date">2026-07</span><span class="traj__step">step 8</span><span>AlienLM project page with an in-browser tokenizer demo is up. <a href="/alienlm/">[project page]</a> <a href="https://arxiv.org/abs/2601.22710">[arXiv]</a> <a href="https://github.com/KimJaehee0725/AlienLM">[code]</a></span></li>
  <li><span class="traj__date">2026-05</span><span class="traj__step">step 7</span><span>AlienLM was accepted to ICML 2026.</span></li>
  <li><span class="traj__date">2026-05</span><span class="traj__step">step 6</span><span>Updated my CV with new under-review manuscripts and archived publications.</span></li>
  <li><span class="traj__date">2026-03</span><span class="traj__step">step 5</span><span>New manuscripts on belief-shift rewards and semiconductor equipment log retrieval are under review.</span></li>
</ul>
<details class="traj-more">
  <summary>show full trajectory</summary>
  <ul class="traj">
    <li><span class="traj__date">2026-01</span><span class="traj__step">step 4</span><span>AlienLM is now public on arXiv, with code released. <a href="https://arxiv.org/abs/2601.22710">[arXiv]</a> <a href="https://github.com/KimJaehee0725/AlienLM">[code]</a></span></li>
    <li><span class="traj__date">2025-11</span><span class="traj__step">step 3</span><span>CheckEval appeared at EMNLP 2025.</span></li>
    <li><span class="traj__date">2025-07</span><span class="traj__step">step 2</span><span>Verbosity-Aware Rationale Reduction appeared at ACL 2025.</span></li>
    <li><span class="traj__date">2024-12</span><span class="traj__step">step 1</span><span>ContAccum, a memory-efficient dense retriever training method, appeared at NeurIPS 2024.</span></li>
  </ul>
</details>

<p class="tok" aria-hidden="true">&lt;pad&gt;<span class="tok__note">not actually padding</span></p>

## Beyond research

Outside research, I like books, films, dry humor, and diving. Scuba and freediving have recently become my favorite ways to get out of my head. I also run and play badminton when I want to stop overthinking for a while.

I share my days with two cats, Luce and hoyang, who have firm opinions about my working-from-home schedule.

<div class="cat-photos">
  <figure class="cat-carousel">
    <div class="cat-carousel__frame">
      <div class="cat-carousel__track">
        <img src="/assets/images/profile/luce.jpg" alt="Luce">
        <img src="/assets/images/profile/luce-2.jpg" alt="Luce">
        <img src="/assets/images/profile/luce-3.jpg" alt="Luce">
      </div>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--prev" aria-label="Previous photo"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--next" aria-label="Next photo"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>
    </div>
    <div class="cat-carousel__dots"></div>
    <figcaption>Luce</figcaption>
  </figure>
  <figure class="cat-carousel">
    <div class="cat-carousel__frame">
      <div class="cat-carousel__track">
        <img src="/assets/images/profile/hoyang.jpg" alt="hoyang">
        <img src="/assets/images/profile/hoyang-2.jpg" alt="hoyang">
        <img src="/assets/images/profile/hoyang-3.jpg" alt="hoyang">
      </div>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--prev" aria-label="Previous photo"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--next" aria-label="Next photo"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>
    </div>
    <div class="cat-carousel__dots"></div>
    <figcaption>hoyang</figcaption>
  </figure>
</div>

<p class="tok" aria-hidden="true">&lt;tool_call&gt;</p>

## Get in touch

<div class="toolcall" data-copy-scope>
  <img class="toolcall__illus illus" src="/assets/images/illustrations/alien-walkie.png" alt="" width="390" height="560" loading="lazy">
  <div class="toolcall__body">
    <p>If you work on LLM reasoning, agents, RL, or retrieval, I would be glad to talk. I am looking for a research internship, especially where the processes are complex, hard to measure, and changing over time.</p>
    <div class="toolcall__code"><span class="tc-fn">send_email</span>(<span class="tc-arg">to=</span><button type="button" class="copy-email" data-copy="jaehee_kim@snu.ac.kr" data-copied="email copied">"jaehee_kim@snu.ac.kr"</button>, <span class="tc-arg">topic=</span>"internship")</div>
    <span class="copy-status" data-copy-status aria-live="polite"></span>
    <p class="toolcall__alt">Click the address to copy it, or <a href="mailto:jaehee_kim@snu.ac.kr">open your mail app</a>.</p>
  </div>
</div>

<p class="tok-close" aria-hidden="true">&lt;/tool_call&gt;</p>

<div class="eos">
  <img class="eos__illus illus" src="/assets/images/illustrations/alien-wave.png" alt="" width="415" height="560">
  <p class="eos__text"><span class="eos__tok" aria-hidden="true">&lt;eos&gt;</span> Thanks for reading.<br><a href="#">↺ keep generating</a></p>
</div>
