---
layout: jk
lang: ko
translation_url: /
permalink: /ko/
excerpt: >-
  서울대학교 산업공학과 박사과정. 언어 모델이 어떻게 추론하고, 검색하고, 시간 속에서 작동하는지를 연구합니다.
toc_tokens: true
---


<p class="tok tok--first" aria-hidden="true">&lt;bos&gt;</p>

<div class="hero">
  <p class="hero__lead">정적인 과제를 넘어, 언어 모델이 어떻게 추론하고 검색하며 <mark>시간에 걸쳐 동작하는지</mark>를 연구합니다.</p>
  <p class="hero__sub">성능 수치를 높이기보다, 문제에 내재한 가정을 규명하고 모호한 능력을 관찰과 검증이 가능한 형태로 정의하는 연구를 합니다.</p>
  <p class="hero__intern">LLM reasoning, RL, agent, retrieval 분야에서 연구 인턴십을 찾고 있으며, 특히 산업 현장의 문제를 다루는 연구 조직에 관심이 있습니다.</p>
</div>

## 소개

서울대학교 산업공학과 박사과정이며, DSBA 연구실에서 강필성 교수님의 지도 아래 언어 모델을 연구하고 있습니다.

주로 기존 연구가 당연하게 전제하는 가정을 다시 살펴보고, 아직 명확히 정의되지 않은 능력을 관찰과 검증이 가능한 실험 구조로 바꾸는 연구를 해왔습니다. 모호한 연구 방향을 구체적인 문제 정의와 벤치마크, 검증 가능한 가설로 좁혀 가는 과정에 관심이 많습니다.

삼성화재, KakaoBank, LG전자, IITP 등과의 산업 협력 프로젝트에도 참여해, 현장의 문제를 연구 문제로 옮기고 실제 제약 아래에서 동작하는 시스템을 다뤄 왔습니다. 자세한 산학협력 내용은 [CV](/ko/cv/)를 참고해 주세요.

<details class="think">
  <summary><span aria-hidden="true">&lt;think&gt;</span><span class="think__label">Thought for 10 semesters</span><span class="think__hint">연구 방향</span></summary>
  <div class="think__body">
    <h3>추론과 강화학습</h3>
    <p>모델이 어떻게 추론하는지, 그리고 RL을 long-horizon 에이전트 행동을 연구하는 방법으로서 관심을 둡니다. 더 어려운 질문은 보통 reward 이전에 옵니다. 에이전트의 역할, action space, 환경의 동역학, 피드백 구조를 현실적으로 정의하는 일이요. 추론 품질을 유지하면서 효율을 지키는 rationale reduction과 decoding 전략도 함께 연구합니다.</p>
    <h3>시간 속에서 작동하는 에이전트</h3>
    <p>대부분의 에이전트 벤치마크는 에이전트가 과제를 끝낼 수 있는지를 묻습니다. 저는 그 일을 계속 해낼 수 있는지에 더 관심이 있습니다. 세상이 바뀌는 순간을 알아차리고, 언제 개입할지 판단하고, 끝이 분명하지 않은 목표를 붙드는 것.</p>
    <h3>외부 정보로 향하는 통로로서의 retrieval</h3>
    <p>저는 retrieval을 넓게, 외부 정보를 언어 모델로 연결하는 통로로 봅니다. 무엇을 검색하느냐에 따라 memory, personalization, 추론 지원, 혹은 변화하는 환경에 대한 관찰 장치가 될 수 있습니다.</p>
    <p class="think__now"><em>The output is not the answer. The output is the trajectory.</em> <strong>OperationBench</strong>는 과제를 끝내는 것을 넘어, 변화하는 상황 속에서 일을 계속 해내는 운영형 에이전트를 평가하기 위한 초기 단계 프로젝트입니다.</p>
    <p class="think__close" aria-hidden="true">&lt;/think&gt;</p>
  </div>
</details>

<p class="tok" aria-hidden="true">&lt;answer&gt;</p>

## 대표 연구

<ul class="selected">
  <li data-copy-scope>
    <p class="selected__head"><a href="/alienlm/">AlienLM</a><span class="selected__venue">ICML 2026</span></p>
    <p class="selected__desc">text-only 환경에서 general task에 적용 가능한 최초의 API 경계 프라이버시 방법론입니다. 모델에게는 여전히 쓸모 있지만 외부 관찰자는 복원하기 어려운 외계어로 텍스트를 변환하며, 평문 대비 81% 이상의 성능을 유지합니다.</p>
    <ul class="chips">
      <li><a class="chip" href="https://arxiv.org/abs/2601.22710">paper</a></li>
      <li><a class="chip" href="https://github.com/KimJaehee0725/AlienLM">code</a></li>
      <li><a class="chip" href="/alienlm/#demo">demo</a></li>
      <li><a class="chip" href="/alienlm/#poster">poster</a></li>
      <li><a class="chip" href="/alienlm/#figures">figures</a></li>
      <li><button type="button" class="chip" data-copy="@inproceedings{kim2026alienlm,&#10;  title     = {AlienLM: Alienization of Language for API-Boundary Privacy in Black-Box LLMs},&#10;  author    = {Kim, Jaehee and Kang, Pilsung},&#10;  booktitle = {Proceedings of the 43rd International Conference on Machine Learning},&#10;  year      = {2026}&#10;}" data-copied="BibTeX가 복사되었어요">bib ⧉</button></li>
    </ul>
    <span class="copy-status" data-copy-status aria-live="polite"></span>
  </li>
  <li>
    <p class="selected__head"><a href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html">ContAccum</a><span class="selected__venue">NeurIPS 2024</span></p>
    <p class="selected__desc">대조학습을 비교 대상뿐 아니라 비교 기준이 되는 query까지 누적해 개선합니다. 검색(retrieval) 모델을 제한된 GPU 환경에서도 큰 배치 효과를 내며 안정적으로 학습할 수 있습니다.</p>
    <ul class="chips">
      <li><a class="chip" href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/15ba84c1e19b0eb75f96922f5da0a021-Abstract-Conference.html">paper</a></li>
    </ul>
  </li>
  <li>
    <p class="selected__head"><a href="https://aclanthology.org/2025.emnlp-main.796/">CheckEval</a><span class="selected__venue">EMNLP 2025</span></p>
    <p class="selected__desc">LLM-as-a-judge를 human correlation이 아니라 모델과 샘플 변화에 대한 안정성 중심으로 다시 봅니다. 모델이나 데이터가 바뀌어도 일관된 자동 평가가 필요한 실제 서비스 환경에서 유용합니다.</p>
    <ul class="chips">
      <li><a class="chip" href="https://aclanthology.org/2025.emnlp-main.796/">paper</a></li>
    </ul>
  </li>
</ul>

<p class="see-all"><a href="/ko/publications/">전체 논문 보기</a></p>

<p class="tok" aria-hidden="true">trajectory.log</p>

## 소식

<ul class="traj">
  <li><span class="traj__date">2026-10</span><span class="traj__step">step 9</span><span>과제 성과와 리뷰어 활동을 반영해 CV를 업데이트했습니다. <a href="/ko/cv/">[CV]</a></span></li>
  <li><span class="traj__date">2026-07</span><span class="traj__step">step 8</span><span>브라우저에서 tokenizer 데모를 직접 실행할 수 있는 AlienLM 프로젝트 페이지가 공개되었습니다. <a href="/alienlm/">[프로젝트 페이지]</a> <a href="https://arxiv.org/abs/2601.22710">[arXiv]</a> <a href="https://github.com/KimJaehee0725/AlienLM">[코드]</a></span></li>
  <li><span class="traj__date">2026-05</span><span class="traj__step">step 7</span><span>AlienLM이 ICML 2026에 accept되었습니다.</span></li>
  <li><span class="traj__date">2026-05</span><span class="traj__step">step 6</span><span>새 under-review 원고와 정리된 논문을 반영해 CV를 업데이트했습니다.</span></li>
  <li><span class="traj__date">2026-03</span><span class="traj__step">step 5</span><span>belief-shift reward와 반도체 장비 로그 retrieval 관련 원고가 under review입니다.</span></li>
</ul>
<details class="traj-more">
  <summary>전체 궤적 보기</summary>
  <ul class="traj">
    <li><span class="traj__date">2026-01</span><span class="traj__step">step 4</span><span>AlienLM 논문(arXiv)과 코드가 공개되었습니다. <a href="https://arxiv.org/abs/2601.22710">[arXiv]</a> <a href="https://github.com/KimJaehee0725/AlienLM">[코드]</a></span></li>
    <li><span class="traj__date">2025-11</span><span class="traj__step">step 3</span><span>CheckEval이 EMNLP 2025에 게재되었습니다.</span></li>
    <li><span class="traj__date">2025-07</span><span class="traj__step">step 2</span><span>Verbosity-Aware Rationale Reduction이 ACL 2025에 게재되었습니다.</span></li>
    <li><span class="traj__date">2024-12</span><span class="traj__step">step 1</span><span>memory-efficient dense retriever 학습 방법인 ContAccum이 NeurIPS 2024에 게재되었습니다.</span></li>
  </ul>
</details>

<p class="tok" aria-hidden="true">&lt;pad&gt;<span class="tok__note">not actually padding</span></p>

## 연구 밖에서

연구 외에는 책과 영화를 즐기고, 스쿠버다이빙과 프리다이빙으로 시간을 보냅니다. 두 마리 고양이 Luce와 hoyang과 함께 지냅니다.

<div class="cat-photos">
  <figure class="cat-carousel">
    <div class="cat-carousel__frame">
      <div class="cat-carousel__track">
        <img src="/assets/images/profile/luce.jpg" alt="고양이 Luce">
        <img src="/assets/images/profile/luce-2.jpg" alt="고양이 Luce">
        <img src="/assets/images/profile/luce-3.jpg" alt="고양이 Luce">
      </div>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--prev" aria-label="이전 사진"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--next" aria-label="다음 사진"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>
    </div>
    <div class="cat-carousel__dots"></div>
    <figcaption>Luce</figcaption>
  </figure>
  <figure class="cat-carousel">
    <div class="cat-carousel__frame">
      <div class="cat-carousel__track">
        <img src="/assets/images/profile/hoyang.jpg" alt="고양이 hoyang">
        <img src="/assets/images/profile/hoyang-2.jpg" alt="고양이 hoyang">
        <img src="/assets/images/profile/hoyang-3.jpg" alt="고양이 hoyang">
      </div>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--prev" aria-label="이전 사진"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
      <button type="button" class="cat-carousel__nav cat-carousel__nav--next" aria-label="다음 사진"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>
    </div>
    <div class="cat-carousel__dots"></div>
    <figcaption>hoyang</figcaption>
  </figure>
</div>

<p class="tok" aria-hidden="true">&lt;tool_call&gt;</p>

## 연락

<div class="toolcall" data-copy-scope>
  <img class="toolcall__illus illus" src="/assets/images/illustrations/alien-walkie.png" alt="" width="390" height="560" loading="lazy">
  <div class="toolcall__body">
    <p>LLM reasoning, RL, agent, retrieval 분야를 연구하거나 실제 서비스에 적용하려는 조직과의 협업에 관심이 있습니다. 현재 연구 인턴십 기회를 찾고 있으니 편하게 연락 주세요.</p>
    <div class="toolcall__code"><span class="tc-fn">send_email</span>(<span class="tc-arg">to=</span><button type="button" class="copy-email" data-copy="jaehee_kim@snu.ac.kr" data-copied="이메일 주소가 복사되었어요">"jaehee_kim@snu.ac.kr"</button>, <span class="tc-arg">topic=</span>"internship")</div>
    <span class="copy-status" data-copy-status aria-live="polite"></span>
    <p class="toolcall__alt">주소를 누르면 복사되고, <a href="mailto:jaehee_kim@snu.ac.kr">메일 앱으로 바로 보낼 수도</a> 있어요.</p>
  </div>
</div>

<div class="eos">
  <img class="eos__illus illus" src="/assets/images/illustrations/alien-wave.png" alt="" width="415" height="560">
  <p class="eos__text"><span class="eos__tok" aria-hidden="true">&lt;eos&gt;</span> 읽어주셔서 감사합니다.<br><a href="#">↺ keep generating</a></p>
</div>
