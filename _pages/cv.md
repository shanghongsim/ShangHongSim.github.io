---
layout: default
permalink: /cv/
title: cv
nav: true
nav_order: 4
---

<div class="cv-page">
  <!-- hero -->
  <header class="cv-hero cv-reveal">
    <p class="cv-kicker">Curriculum Vitae</p>
    <h1>Research at the edge of <em>reliable</em> language models.</h1>
    <p class="cv-hero-sub">Machine Learning Engineer at Oumi PBC. I work on post-training (SFT, RL, distillation) and spend my research time making open models capable and reliable.</p>
    <div class="cv-hero-actions">
      <a class="cv-download" href="{{ '/assets/pdf/shang_hong_sim_cv.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-arrow-down"></i> Download PDF
      </a>
      <a class="cv-download cv-download--ghost" href="{{ '/assets/pdf/shang_hong_sim_cv.docx' | relative_url }}">
        <i class="fa-regular fa-file-word"></i> Word
      </a>
      <span class="cv-hero-meta">Updated April 2026 &middot; Seattle, WA</span>
    </div>
  </header>

  <!-- highlights -->
  <div class="cv-highlights cv-reveal">
    <div class="cv-highlight">
      <b>ICLR <em>’25</em></b>
      <span>Oral &middot; first-author</span>
    </div>
    <div class="cv-highlight">
      <b>4</b>
      <span>Publications</span>
    </div>
    <div class="cv-highlight">
      <b>4.85<em>/5.0</em></b>
      <span>cGPA &middot; highest distinction</span>
    </div>
    <div class="cv-highlight">
      <b>Top 3<em>/600</em></b>
      <span>A*STAR Talent Search</span>
    </div>
  </div>

  <!-- experience -->
  <section class="cv-section cv-reveal">
    <p class="cv-label">Experience</p>
    <div class="cv-timeline">
      <div class="cv-entry">
        <h3>Machine Learning Engineer</h3>
        <p class="cv-entry-meta"><span class="cv-org">Oumi PBC</span> &middot; Enterprise Platform &middot; Aug 2025 – Present</p>
        <ul>
          <li>Own end-to-end development of on-policy distillation for the enterprise platform, from training methodology to backend APIs, frontend workflows, and billing integration.</li>
          <li>Lead training science for enterprise fine-tuning: experiments and production-grade recipes for SFT, RL, and distillation.</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Machine Learning Engineering Intern</h3>
        <p class="cv-entry-meta"><span class="cv-org">Oumi PBC</span> &middot; June 2025 – Aug 2025</p>
        <ul>
          <li>Led ConseqBench, benchmarking how AI agents respond to risks in real-world environments.</li>
          <li>Built RAG + GRPO and web-agent SFT demos for Project Inspire, used in company pitch materials.</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Senior Research Assistant</h3>
        <p class="cv-entry-meta"><span class="cv-org">SUTD</span> &middot; Feb 2025 – May 2025</p>
        <ul>
          <li>Developed Ground-GRPO, an RL-based fine-tuning method for grounded citation generation in LLMs.</li>
          <li>Designed reward signals that reduce unsupported citations and improve attribution quality in RAG-style generation.</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Master’s Student (Research)</h3>
        <p class="cv-entry-meta"><span class="cv-org">SUTD, DeCLaRe Lab</span> &middot; Sep 2023 – Dec 2024</p>
        <ul>
          <li>First-author paper (Trust-Align) on LLM trustworthiness metrics and alignment, accepted at ICLR 2025 (Oral); 40+ GitHub stars.</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Bioinformatics Research Intern</h3>
        <p class="cv-entry-meta"><span class="cv-org">IMCB, A*STAR</span> &middot; May 2022 – June 2023</p>
        <ul>
          <li>Independently built a Python/R workflow to identify therapeutically significant gene sets; co-authored a manuscript in Nucleic Acids Research (IF 16.6).</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Machine Learning Research Intern</h3>
        <p class="cv-entry-meta"><span class="cv-org">I²R, A*STAR</span> &middot; May – Sep 2021</p>
        <ul>
          <li>Cut brain-signal-decoding latency 45% with Kalman filters and RNNs on resource-limited BCI chips, without losing performance.</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Bioengineering Research Intern</h3>
        <p class="cv-entry-meta"><span class="cv-org">IBN, A*STAR</span> &middot; Nov 2018 – Feb 2019</p>
        <ul>
          <li>Analyzed protein structures in multidrug-resistant bacteria; 3rd place at A*STAR Talent Search among 600 projects.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- education -->
  <section class="cv-section cv-reveal">
    <p class="cv-label">Education</p>
    <div class="cv-timeline">
      <div class="cv-entry">
        <h3>M.Eng (Research), Computer Science</h3>
        <p class="cv-entry-meta"><span class="cv-org">Singapore University of Technology and Design</span> &middot; Sep 2023 – Dec 2024</p>
        <ul>
          <li>Thesis on reliable RAG systems in NLP.</li>
          <li>Completed three graduate-level courses in first year to secure a $15,000 research grant.</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>B.Eng (Hons), Computer Science</h3>
        <p class="cv-entry-meta"><span class="cv-org">Singapore University of Technology and Design</span> &middot; Sep 2020 – May 2024</p>
        <ul>
          <li>cGPA 4.85/5.0, Honors with Highest Distinction.</li>
          <li>SUTD Global Distinguished Scholarship (top 10%).</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- projects -->
  <section class="cv-section cv-reveal">
    <p class="cv-label">Projects</p>
    <ul class="cv-plain">
      <li><b>MediRAG</b>: biomedical RAG pipeline using BGE, PubMed embeddings, and FLAN-T5 query expansion for better QA accuracy.<span class="cv-year">Sep 2023</span></li>
      <li><b>Maze AI</b>: CNN, autoencoder, and RL models for maze solving on 120k mazes; best AI course project.<span class="cv-year">Sep 2023</span></li>
      <li><b>Nugen Studio</b>: advanced RAG educational chatbot; custom Figma/React front end; 30+ user interviews, 20 product tests.<span class="cv-year">2022 – 2024</span></li>
    </ul>
  </section>

  <!-- awards & service -->
  <section class="cv-section cv-reveal">
    <p class="cv-label">Awards &amp; Service</p>
    <ul class="cv-plain">
      <li><b>Cloudsine Artificial Intelligence Award</b>: top students in 50.021 Artificial Intelligence.<span class="cv-year">2024</span></li>
      <li><b>High Performance Computing Innovation Challenge</b>: 2nd place overall.<span class="cv-year">2022</span></li>
      <li><b>A*STAR Talent Search</b>: 3rd place of 600, for exceptional research ability.<span class="cv-year">2019</span></li>
      <li><b>Climate Science, Author</b>: co-authored a greenhouse-effect course for a charity reaching 40+ countries.<span class="cv-year">2020</span></li>
      <li><b>SUTD Rotaract Club, Professional Development Director</b>: led a university-wide forum with CEOs, senior Rotary executives, and 50+ students.<span class="cv-year">2020 – 2021</span></li>
    </ul>
  </section>

  <!-- skills -->
  <section class="cv-section cv-reveal">
    <p class="cv-label">Skills</p>
    <div>
      <div class="cv-chip-group">
        <h4>Programming</h4>
        <span class="cv-chip">Python</span><span class="cv-chip">R</span><span class="cv-chip">Bash</span>
      </div>
      <div class="cv-chip-group">
        <h4>ML &amp; Data</h4>
        <span class="cv-chip">PyTorch</span><span class="cv-chip">Hugging Face Transformers</span><span class="cv-chip">NumPy</span><span class="cv-chip">pandas</span><span class="cv-chip">scikit-learn</span><span class="cv-chip">W&amp;B</span>
      </div>
      <div class="cv-chip-group">
        <h4>LLMs &amp; RAG</h4>
        <span class="cv-chip">vLLM</span><span class="cv-chip">LangChain</span><span class="cv-chip">LlamaIndex</span><span class="cv-chip">spaCy</span><span class="cv-chip">NLTK</span>
      </div>
      <div class="cv-chip-group">
        <h4>Tools</h4>
        <span class="cv-chip">Flask</span><span class="cv-chip">React</span><span class="cv-chip">Git</span><span class="cv-chip">Azure</span>
      </div>
    </div>
  </section>

  <footer class="cv-footer">
    Prefer a copy? Download the <a href="{{ '/assets/pdf/shang_hong_sim_cv.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">PDF</a> or <a href="{{ '/assets/pdf/shang_hong_sim_cv.docx' | relative_url }}">Word</a> version (two pages, updated April 2026).
  </footer>
</div>
