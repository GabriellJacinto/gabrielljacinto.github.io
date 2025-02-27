---
{"date":"2024-10-20","tags":["scientific-paper","done"],"topic":"[[PIC]]","author":null,"year":2019,"implemented":false,"publish":true,"PassFrontmatter":true}
---

[[A_Highly_Accurate_Machine_Learning_Approach_to_Mod_230815_102713 (1).pdf|source]]

>[!done]+ Three-Sentence Summary {Feynman's Technique}
>1. CMOS consume muita energia e perde muita potência. FINFET é mais robusto, porém ainda sofre também. Por isso é importante modelar comportamento de transistores.
>2. Usa-se ML para isso e ANN são as melhores para a predição com um erro baixo
>3. Eles vão explorar os atrasos dos circuitos em seguida


- Problema: vazamento de energia é algo crucial para circuitos modernos, haja visto que eles avançam muito rapidamente para escala nanométrica. Circuitos baseados em CMOS sofrem muito com esse problema devido ao seu design inerente. Circuitos como FINFET são mais robustos, mas não são isentos desse fenômeno. Usualmente simulações baseadas em modelos conseguem prever o vazamento antes da fabricação do tecnologia, mas demoram muito. 
- Solução: explora-se o uso de machine learning (Regressão Polinomial e ANN) para modelar e prever o comportamento da transistor. Conclusão similar aos meus papers.
- Metodologia: Várias características são utilizadas, como o densidade de dopantes e variabilidades de processo, temperatura e tensão. As redes neurais se mostram melhores para a predição dos valores. Achei diferente que eles usam o Z-score para padronizar. Talvez posso tentar usar a arquitetura deles para prever meus próprios targets.

# Análise
Achei que os resultados tem cheiro de overfitting, só implementando para ter certeza, pois eles usaram só um ratio de 80 treino 20 teste. Nunca vi isso, geralmente utilizam o validação também. Nem citaram cross validation. Parece que a maioria desse artigos de cinco páginas evitam ir muito a fundo sobre a etapa de treinamento o que me parece ser um meat-grinder de machine learning, só joga os dados nos modelos e reza para sair carne moída. A ANN foi a melhor sem muita surpresa. Muitos erros de inglês no texto também, jesus. O que é diferente do meu é que eles exploraram outros circuitos também. Muitos na verdade. Usaram o R2 como erro, o que é ótimo pois também utilizo, apesar de não entrarem na justificativa de o porquê utilizarem ele. 
Há duas referências que eu quero ler que eles indicaram que podem ser interessantes:
- [ ] In [[Accurate leakage estimation for FinFET standard cells using the response surface methodology\|Accurate leakage estimation for FinFET standard cells using the response surface methodology]], author proposed abstract models to predict leakage and delay behaviours in FinFET digital cells, based on response surface methodology. 
- [ ] In the paper [[3D vs. 2D device simulation of FinFET logic gates under PVT variations,\|3D vs. 2D device simulation of FinFET logic gates under PVT variations,]], author has developed a adjusted 2D model for 3D structure of FinFET using gate under lap adjustment methodology to speed up simulation time with compromise in accuracy up to 20%. 

# Stuff I learned

ANNs são mais comumente trainadas utilizando a arquitetura do Multi-Layer Perceptron. Isso contextualiza melhor todo o burburinho que o [[KAN: Kolmogorov-Arnold Networks\|KAN: Kolmogorov-Arnold Networks]] geraram. Mas a forma que ela aprende ainda continua sendo o clássico back-propagation. 

Sobre VLSIs, há muitos parâmetros que não conhecia como Body doping concetration, source/drain concentration, conduction band carrier concentration, intrinsic carrier concentration e equivalent gate dielectric thickness.

---
# Implementation



# Flashcards

#flashcards
**O que é nbody?**::Concentração de dopagem do corpo do transistor.

**O que é nsd?**::Concentração de dopagem da fonte/dreno do transistor.

**O que é nc0subn?**::Concentração de portadores na banda de condução a 300 K de temperatura.

**O que é toxp?**::Espessura física da camada de óxido.

**O que é hfin?**::Altura da aleta em transistores FinFET.

**O que é ni0subn?**::Concentração intrínseca de portadores a 300 K de temperatura.

**O que é eot?**::Espessura equivalente da camada de dielétrico da porta.

**O que é lg?**::Comprimento físico da porta do transistor.

**O que é tfin?**::Espessura da aleta em transistores FinFET.
