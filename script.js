/* Phoenix Athletix Club — interactions
   No dependencies. Progressive enhancement only. */
(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    // Close menu when a link is tapped
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // "What are you training for?" chips -> preselect the closest program + jump to form
  var goalToInterest = {
    'Get Stronger': 'Strength &amp; Conditioning',
    'Move Better': 'Personal Training',
    'Build Endurance': 'HIIT / Bootcamp',
    'Improve Performance': 'Athlete Performance',
    'Feel Better': 'General Fitness',
    'Build Confidence': 'General Fitness'
  };
  var interestSelect = document.getElementById('f-interest');
  var goalInput = document.getElementById('f-goal');

  Array.prototype.forEach.call(document.querySelectorAll('.goal-chip'), function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.goal-chip').forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      var goal = chip.getAttribute('data-goal');
      var target = goalToInterest[goal];
      if (interestSelect && target) {
        Array.prototype.forEach.call(interestSelect.options, function (opt) {
          if (opt.value.replace('&amp;', '&') === target.replace('&amp;', '&')) opt.selected = true;
        });
      }
      if (goalInput && !goalInput.value) goalInput.value = goal;
      var start = document.getElementById('start');
      if (start) start.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Lead form — client-side validation + friendly success state.
  // TODO(owner): wire `action`/submit to your provider (Formspree, GoHighLevel,
  // Netlify Forms, etc.). Right now it validates and shows a confirmation only.
  var form = document.getElementById('leadForm');
  var note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.className = 'form-note';
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();

      if (!name || !email || !phone) {
        note.textContent = 'Please add your name, email, and phone so a coach can reach you.';
        note.classList.add('err');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = 'That email doesn’t look quite right — mind checking it?';
        note.classList.add('err');
        return;
      }
      // Success placeholder (no backend connected yet)
      note.textContent = 'Thanks, ' + name.split(' ')[0] + '! A coach will reach out soon. Welcome to Phoenix.';
      note.classList.add('ok');
      form.reset();
    });
  }

  // Subtle reveal-on-scroll (respects reduced motion)
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.section-head, .pillar, .program-card, .why-card, .coach-card, .amenity, .goal-chip').forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity .6s cubic-bezier(.2,.7,.2,1) ' + (i % 6) * 0.05 + 's, transform .6s cubic-bezier(.2,.7,.2,1) ' + (i % 6) * 0.05 + 's';
      io.observe(el);
    });
  }
})();
