/* Small generation-themed touches for the jk layout.
 * 1. The home lead sentence streams in token by token (once per session; replay via "keep generating").
 * 2. Clicking the name on the home page re-samples it at a new "temperature".
 * 3. Leaving the tab swaps the title to "waiting for next token…".
 * 4. Hovering AlienLM in Selected research alienizes the title, then decodes it back.
 * Everything degrades to plain static text without JS or with reduced motion.
 */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);
  var isKo = lang === 'ko';
  var isHome = document.body.classList.contains('jk--toc');

  function store(fn) { try { return fn(); } catch (e) { return null; } }

  // ── 1. Streaming lead sentence ──────────────────────────────────────────────
  var lead = document.querySelector('.jk-main .hero__lead');
  var streaming = false;

  function wrapTokens(root) {
    var tokens = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var parts = node.textContent.match(/\s*\S+|\s+$/g);
      if (!parts) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function (part) {
        var span = document.createElement('span');
        span.className = 'jk-t';
        span.textContent = part;
        frag.appendChild(span);
        tokens.push(span);
      });
      node.parentNode.replaceChild(frag, node);
    });
    return tokens;
  }

  function stream(el) {
    if (!el || streaming || reduce) return;
    streaming = true;
    if (!el._jkOriginal) el._jkOriginal = el.innerHTML;
    el.innerHTML = el._jkOriginal;
    el.classList.add('is-streaming');
    var tokens = wrapTokens(el);
    var cursor = document.createElement('span');
    cursor.className = 'jk-stream-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    var i = 0;
    (function next() {
      if (i < tokens.length) {
        tokens[i].classList.add('on');
        tokens[i].parentNode.insertBefore(cursor, tokens[i].nextSibling);
        i += 1;
        setTimeout(next, 28 + Math.random() * 38);
      } else {
        setTimeout(function () {
          if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
          el.innerHTML = el._jkOriginal;
          el.classList.remove('is-streaming');
          streaming = false;
        }, 1400);
      }
    })();
  }

  if (lead && isHome) {
    var seen = store(function () { return sessionStorage.getItem('jk-streamed'); });
    if (!seen) {
      stream(lead);
      store(function () { sessionStorage.setItem('jk-streamed', '1'); });
    }
    // "↺ keep generating" at <eos>: back to the top, then stream again
    var regen = document.querySelector('.eos__text a[href="#"]');
    if (regen) {
      regen.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        setTimeout(function () { stream(lead); }, reduce ? 0 : 650);
      });
    }
  }

  // ── 2. Re-sample the name ───────────────────────────────────────────────────
  var nameLink = document.querySelector('.jk-id__name');
  if (nameLink && isHome) {
    var samples = [
      ['jaehee_kim', '0.0'],
      ['김재희', '0.2'],
      ["hoyang's_human", '0.7'],
      ["luce's_butler", '0.8'],
      ['overthinker_v2', '1.1'],
      ['jaehee_kim(1)', '1.4']
    ];
    var idx = 0;
    var typing = false;
    var textNode = nameLink.firstChild; // "jaehee_kim" before the cursor span
    var temp = document.createElement('span');
    temp.className = 'jk-temp';
    temp.setAttribute('aria-hidden', 'true');
    nameLink.parentNode.insertBefore(temp, nameLink.nextSibling);
    nameLink.setAttribute('aria-label', 'Jaehee Kim');
    nameLink.title = isKo ? '눌러서 다시 샘플링' : 'click to re-sample';
    var hideTemp;

    nameLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (typing || !textNode) return;
      idx = (idx + 1) % samples.length;
      var target = samples[idx][0];
      temp.textContent = 'temperature=' + samples[idx][1];
      temp.classList.add('on');
      clearTimeout(hideTemp);
      hideTemp = setTimeout(function () { temp.classList.remove('on'); }, 1800);
      if (reduce) { textNode.textContent = target; return; }
      typing = true;
      var current = textNode.textContent;
      (function erase() {
        if (current.length) {
          current = current.slice(0, -1);
          textNode.textContent = current;
          setTimeout(erase, 22);
        } else {
          var k = 0;
          (function type() {
            if (k <= target.length) {
              textNode.textContent = target.slice(0, k);
              k += 1;
              setTimeout(type, 45 + Math.random() * 40);
            } else {
              typing = false;
            }
          })();
        }
      })();
    });
  }

  // ── 3. Tab title while away ─────────────────────────────────────────────────
  var originalTitle = document.title;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      originalTitle = document.title;
      document.title = isKo ? '다음 토큰 기다리는 중…' : 'waiting for next token…';
    } else {
      document.title = originalTitle;
    }
  });

  // ── 4–6. Selected research: hover effects that act out each paper ──────────
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var heads = Array.prototype.slice.call(document.querySelectorAll('.selected__head'));
  function findTitle(name) {
    for (var h = 0; h < heads.length; h++) {
      var a = heads[h].querySelector('a');
      if (a && a.textContent.trim() === name) return a;
    }
    return null;
  }
  function fxSlot(a) {
    var slot = a.parentNode.querySelector('.jk-fx');
    if (!slot) {
      slot = document.createElement('span');
      slot.className = 'jk-fx';
      slot.setAttribute('aria-hidden', 'true');
      a.parentNode.appendChild(slot);
    }
    return slot;
  }
  function onHover(a, fn) {
    if (!a || !canHover || reduce) return;
    a.addEventListener('mouseenter', fn);
    a.addEventListener('focus', fn);
  }

  // AlienLM: the title is alienized, then decoded back letter by letter
  var alien = findTitle('AlienLM');
  var alienRunning = false;
  onHover(alien, function () {
    if (alienRunning) return;
    alienRunning = true;
    var word = 'AlienLM';
    var glyphs = 'abcdefghijklmnopqrstuvwxyz0123456789#?!%/:;_';
    alien.style.width = alien.getBoundingClientRect().width + 'px';
    alien.classList.add('jk-scramble');
    var frame = 0, total = 18;
    (function tick() {
      var out = '';
      for (var c = 0; c < word.length; c++) {
        out += frame >= total - (word.length - c) * 1.5 ? word[c] : glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      alien.textContent = out;
      frame += 1;
      if (frame <= total) { setTimeout(tick, 45); }
      else { alien.textContent = word; alien.style.width = ''; alien.classList.remove('jk-scramble'); alienRunning = false; }
    })();
  });

  // ContAccum: the similarity matrix grows one passage column, then one query row, at a time
  var contaccum = findTitle('ContAccum');
  var caRunning = false, caHide;
  onHover(contaccum, function () {
    if (caRunning) return;
    caRunning = true;
    clearTimeout(caHide);
    var slot = fxSlot(contaccum);
    var B = 2, M = 6, q = B, p = B;
    function draw() {
      var html = '<span class="jk-grid" style="grid-template-columns:repeat(' + p + ',7px)">';
      for (var r = 0; r < q; r++) {
        for (var c = 0; c < p; c++) {
          var kind = r === c ? 'pos' : (r >= B || c >= B ? 'bank' : 'neg');
          var fresh = (r === q - 1 && r >= B) || (c === p - 1 && c >= B);
          html += '<span class="jk-cell ' + kind + (fresh ? ' fresh' : '') + '"></span>';
        }
      }
      html += '</span><span class="jk-fx__label">' + (isKo ? '\uCFFC\uB9AC ' + q + ' \u00D7 \uD328\uC2DC\uC9C0 ' + p : 'q ' + q + ' \u00D7 p ' + p) + '</span>';
      slot.innerHTML = html;
    }
    draw();
    (function step() {
      if (p < M || q < M) {
        if (p <= q) { p += 1; } else { q += 1; }
        draw();
        setTimeout(step, 340);
      } else {
        caRunning = false;
        caHide = setTimeout(function () { slot.innerHTML = ''; }, 2600);
      }
    })();
  });

  // CheckEval: a checklist fills in item by item (met / not met), then becomes one score
  var checkeval = findTitle('CheckEval');
  var ceRunning = false, ceHide;
  onHover(checkeval, function () {
    if (ceRunning) return;
    ceRunning = true;
    clearTimeout(ceHide);
    var slot = fxSlot(checkeval);
    var verdicts = [true, true, false, true];
    slot.innerHTML = '<span class="jk-row"></span><span class="jk-fx__label jk-total"></span>';
    var row = slot.querySelector('.jk-row');
    var total = slot.querySelector('.jk-total');
    var i = 0;
    // 1) the checklist items appear one by one, still unchecked
    (function addBox() {
      if (i < verdicts.length) {
        var b = document.createElement('span');
        b.className = 'jk-box';
        row.appendChild(b);
        i += 1;
        setTimeout(addBox, 200);
      } else {
        // 2) each item is checked: met or not met
        var j = 0;
        (function mark() {
          if (j < verdicts.length) {
            var box = row.children[j];
            box.textContent = verdicts[j] ? '\u2713' : '\u2717';
            box.classList.add(verdicts[j] ? 'yes' : 'no');
            j += 1;
            setTimeout(mark, 300);
          } else {
            // 3) and the checklist is aggregated into a score
            setTimeout(function () {
              total.textContent = '3/4 = 0.75';
              total.classList.add('on');
              ceRunning = false;
              ceHide = setTimeout(function () { slot.innerHTML = ''; }, 2800);
            }, 250);
          }
        })();
      }
    })();
  });
})();
