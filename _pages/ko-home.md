---
layout: jk
lang: ko
translation_url: /
permalink: /ko/
excerpt: >-
  서울대학교 산업공학과 박사과정. 전체 상태를 다 보지 못한 채, 시간에 따라 변하는 환경에서 행동해야 하는 에이전트를 연구합니다.
toc_tokens: true
---


<p class="tok tok--first" aria-hidden="true">&lt;bos&gt;</p>

<div class="hero">
  <p class="hero__lead">저는 <mark>전체 상태를 다 보지 못한 채</mark> 행동해야 하는 에이전트를 연구합니다. 환경은 <mark>시간에 따라 변하고</mark>, 무엇이 최적인지는 누구도 알지 못합니다.</p>
  <p class="hero__sub">사람도 전체 그림을 다 보고 결정하지는 않습니다. 일단 결정하고, 결과가 들어오는 대로 고쳐 나갑니다. 에이전트도 그럴 수 있어야 합니다.</p>
</div>

## 소개

서울대학교 산업공학과 박사과정이며, DSBA 연구실에서 강필성 교수님의 지도를 받고 있습니다. 산업공학을 공부하면서, 문제를 볼 때 <mark>현장에서 실제로 어떻게 돌아가는지</mark>부터 확인하는 습관이 생겼습니다.

연구는 주로 <mark>방법이 가정하는 환경</mark>과 <mark>사람들이 실제로 놓인 환경</mark> 사이의 틈에서 시작합니다. ContAccum은 제한된 메모리로 큰 배치의 대조학습을 해야 했던 데서 시작했습니다. gradient accumulation으로는 부족했고, GradCache는 구현이 까다로웠습니다. AlienLM은 기존 프라이버시 방법론이 전통적인 머신러닝을 전제로 만들어져, LLM API와 텍스트를 주고받을 때의 연산량, 데이터 크기, 모달리티를 고려하지 못한다는 점에서 출발했습니다.

지금은 복잡하고, 부분적으로만 관측되며, 시간에 따라 변하는 <mark>산업 공정과 닮은 환경</mark>을 만들고 그 안의 에이전트를 연구합니다. 이런 환경에서는 최적의 결정이 무엇인지 아무도 모르기 때문에, 평가하는 쪽도 매 단계를 탐욕적으로만 채점할 수 있습니다. 에이전트가 이런 곳에서 일하려면 추론, 검색, 강화학습이 모두 필요해서, 셋을 이 환경 안에서 함께 다루고 있습니다.

어려운 문제일수록 단순한 문장으로 말하고 싶고, 능력을 개선하기 전에 그 능력이 무엇을 뜻하는지부터 알고 싶어 합니다.

<p class="tok-close" aria-hidden="true">&lt;|eot_id|&gt;</p>

<details class="think">
  <summary><span aria-hidden="true">&lt;think&gt;</span><span class="think__label">Thought for 10 semesters</span><span class="think__hint">연구 방향</span></summary>
  <div class="think__body">
    <p>요즘 계속 붙들고 있는 세 가지 방향입니다.</p>
    <h3>추론과 강화학습</h3>
    <p>모델이 어떻게 추론하는지, 그리고 RL을 long-horizon 행동을 연구하는 방법으로서 관심을 둡니다. 더 어려운 질문은 보통 reward 이전에 옵니다. 에이전트의 역할, action space, 환경의 동역학, 피드백 구조를 현실적으로 정의하는 일이요. 추론 품질을 유지하면서 효율을 지키는 rationale reduction과 decoding 전략도 함께 연구합니다.</p>
    <h3>검색</h3>
    <p>저는 retrieval을 넓게, 외부 정보를 언어 모델로 연결하는 통로로 봅니다. 변하는 환경에서는 새로 쌓인 로그나 측정값을 통해 무엇이 바뀌었는지 알아내는 수단이 되기도 합니다.</p>
    <h3>시간 속에서 작동하는 에이전트</h3>
    <p>대부분의 에이전트 벤치마크는 에이전트가 과제를 끝낼 수 있는지를 묻습니다. 저는 그 일을 계속 해낼 수 있는지에 더 관심이 있습니다. 환경이 바뀐 것을 알아차리고, 언제 개입할지 판단하고, 끝이 분명하지 않은 목표를 계속 이어갈 수 있는지가 궁금합니다.</p>
    <p class="think__now"><em>The output is not the answer. The output is the trajectory.</em> 지금은 산업 공정을 본뜬 환경을 만들어 이 문제를 연구하고 있습니다.</p>
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

<p class="tok-close" aria-hidden="true">&lt;/answer&gt;</p>

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
    <p>LLM reasoning, RL, agent, retrieval 분야를 연구하거나 실제 서비스에 적용하려는 조직과의 협업에 관심이 있습니다. 특히 공정처럼 복잡하고, 측정하기 어렵고, 시간에 따라 변하는 과정을 다루는 곳에서의 연구 인턴십을 찾고 있으니 편하게 연락 주세요.</p>
    <div class="toolcall__code"><span class="tc-fn">send_email</span>(<span class="tc-arg">to=</span><button type="button" class="copy-email" data-copy="jaehee_kim@snu.ac.kr" data-copied="이메일 주소가 복사되었어요">"jaehee_kim@snu.ac.kr"</button>, <span class="tc-arg">topic=</span>"internship")</div>
    <span class="copy-status" data-copy-status aria-live="polite"></span>
    <p class="toolcall__alt">주소를 누르면 복사되고, <a href="mailto:jaehee_kim@snu.ac.kr">메일 앱으로 바로 보낼 수도</a> 있어요.</p>
  </div>
</div>

<p class="tok-close" aria-hidden="true">&lt;/tool_call&gt;</p>

<div class="eos">
  <img class="eos__illus illus" src="/assets/images/illustrations/alien-wave.png" alt="" width="415" height="560">
  <p class="eos__text"><span class="eos__tok" aria-hidden="true">&lt;eos&gt;</span> 읽어주셔서 감사합니다.<br><a href="#">↺ keep generating</a></p>
</div>
