const projectsData = [
  {
    title: '[Youtube] Viajando o Mundo Como Programador e Nômade Digital',
    subtitle: 'Convidado - Canal do Filipe Mesquita',
    description: `O bate papo de hoje é com Fred Maia, programador e nômade digital. Ele trabalha remoto como programador e tem a liberdade de viajar enquanto trabalha. Ele já morou em várias partes da Irlanda e Portugal, e está planejando passar um tempo viajando pelo Brasil e depois para o Canadá.`,
    imgSrc: '/static/images/nomadismo-filipe-mesquita.jpeg',
    href: 'https://www.youtube.com/watch?v=RzMM45YXxZU&t=150s',
    date: '28 de Agosto de 2021',
  },
  {
    title: '[Podcast] Devs Pelo Mundo',
    subtitle: 'Convidado -  Taverna Da Programação - Ep. 028',
    description: `Ahoy visitante, entre sem deixar a porta da Taverna bater! Siiiim, hoje a Taverna abriu o mapa mundi e decidiu fazer uma navegação global, falando com pessoas que trabalham com tecnologia por este mundão à fora. Vamos descobrir quais foram as suas motivações de irem descobrir novos mundos e os desafios que esta jornada os reservou! E aí, todos a bordo?`,
    imgSrc: '/static/images/EP028-bg.png',
    href:
      'https://open.spotify.com/episode/5phRSEGN6EGoOjnjh1R8Rp?si=29scJJjgRKar31rxMMZScw&dl_branch=1',
    date: '10 de Agosto de 2021',
  },
  {
    title: '[Podcast] Um nômade Digital em Portugal',
    subtitle: 'Convidado -  Dev em Portugal - Ep. 5',
    description: `Nesse episódio converso com Fred Maia, que é nômade digital e está passando uma temporada em Portugal. O Fred morou na Irlanda por alguns anos e conversamos um pouco sobre essa vida de nômade, sobre as comparações entre Irlanda e Portugal.`,
    imgSrc: '/static/images/dev-em-portugal.jpg',
    href:
      'https://open.spotify.com/episode/3KxVbfajHrnYb1mpF7nrK8?si=_JcH5FTSQj6H5j-iY5NGJQ&dl_branch=1',
    date: '05 de Março de 2021',
  },
  {
    title: '[Youtube] Live: Trabalho de Desenvolvedor e QA na Alemanha',
    subtitle: 'Passaporte Nerd',
    description: `Como é trabalhar como Desenvolvedor(a) e QA na Alemanha? Como conquistar uma vaga?
      Participantes: Fred Maia, Maiele Ranzan, Fabio Vedovelli, Filipe Portes.`,
    imgSrc: '/static/images/dev-qa-alemanha-passaporte-nerd.jpg',
    href: 'https://www.youtube.com/watch?v=S4Fd52N5XDI',
    date: '23 de Julho de 2020',
  },
  {
    title: '[Youtube] Live: Como conquistamos nossa vaga de Dev na Irlanda? 🇮🇪',
    subtitle: 'Passaporte Nerd',
    description: `Como foi o processo para conquistarmos nossa vaga de Dev na Irlanda?
      Participantes: Fred Maia, Juciellen Cabrera, Maicon Anderson, Thales Andrade.`,
    imgSrc: '/static/images/vaga-dev-irlanda-passaporte-nerd.jpg',
    href: 'https://www.youtube.com/watch?v=PfqIsOoQRd4',
    date: '11 de Junho de 2020',
  },
  {
    title: '[Youtube] Live: Como é trabalhar na área de Infra e DevOps na Irlanda? 🇮🇪',
    subtitle: 'Passaporte Nerd',
    description: `Como é trabalhar na área de infra na Irlanda? Existem muitas oportunidades?
      Quais as tecnologias de maior demanda? O que é necessário pra conquistar uma vaga?
      Participantes: Fred Maia, Lee Pêgas, Nana da Silva, Rodolfo Ramalho, Diego Viegas, Victor Rodrigues.`,
    imgSrc: '/static/images/devops-irlanda-passaporte-nerd.jpg',
    href: 'https://www.youtube.com/watch?v=fhvTeuyQ3LE',
    date: '30 de Abril de 2020',
  },
  {
    title: '[Podcast] Cansados até do Brasil!',
    subtitle: 'Convidado -  Devs Cansados - Ep. 13',
    description: `Nesse episódio falamos sobre os motivos de deixar o país como dev (se é que precisa de um), bem como dificuldades quando chega lá.
      Participantes: Fernando Cezar (Brasil), Fred Maia (Irlanda), Carlos Gustavo (Holanda) e Marcelo Carvalho (Portugal).`,
    imgSrc: '/static/images/devscansados.jpg',
    href: 'https://anchor.fm/devs-cansados/episodes/13--Cansados-at-do-Brasil-ececa7',
    date: '06 de Abril de 2020',
  },
  {
    title: '[Youtube] Live: As cagadas devs que já fizemos (ou fizeram)',
    subtitle: 'Convidado -  Devs Cansados',
    description: `Compartilhamos histórias de cagadas que já fizemos durante a nossa vida cansada de desenvolvedores de software.`,
    imgSrc: '/static/images/devscansados.jpg',
    href: 'https://www.youtube.com/watch?v=i3o-QiOxTMo',
    date: '04 de Abril de 2020',
  },
  {
    title: '[Youtube] Live: Vale a pena trabalhar como PJ (Contractor) na Irlanda? 🇮🇪',
    subtitle: 'Passaporte Nerd',
    description: `Vale a pena trabalhar como PJ no exterior? O equivalente à PJ na Irlanda é o que chamamos de Contractor. Vamos entender as vantagens e desvantagens deste modelo de trabalho e saber a realidade dos participantes.`,
    imgSrc: '/static/images/passaporte-nerd-pj-irlanda.jpg',
    href: 'https://www.youtube.com/watch?v=UpXq7eHDMQg',
    date: '31 de Março de 2020',
  },
  {
    title: '[Podcast] Java Carreta Furacão',
    subtitle: 'Convidado -  Devs Cansados - Ep. 5',
    description: `Neste episódio falamos sobre a linguagem mais amada e odiada de todas, o Java!
      Participantes: João Paulo, Guilherme Moreira, Fred Maia, Rafael Ponte e Douglas Crockford.`,
    imgSrc: '/static/images/devscansados.jpg',
    href: 'https://anchor.fm/devs-cansados/episodes/05--Java-Carreta-Furaco-e5b7qi',
    date: '11 de Setembro de 2019',
  },
  {
    title: '[Youtube] Trabalho de Programador Java na Irlanda',
    subtitle: 'Convidado -  E-Dublin',
    description: `Edu conversou com o Frederico, que é programador Java aqui na Irlanda e contou como foi 
      conseguir um trabalho nessa área sem ter passaporte europeu.`,
    imgSrc: '/static/images/edublin-java-fredmaia.jpg',
    href: 'https://www.youtube.com/watch?v=DSgDigDE92Q',
    date: '30 de Janeiro de 2018',
  },
]

export default projectsData
