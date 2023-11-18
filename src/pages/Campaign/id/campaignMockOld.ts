interface CampaignType {
  players: PlayerType[];
  config: any;
  categories: CategoryType[];
  backdropImage: string;
}

interface CategoryType {
  id: number;
  name: string;
  tabs: TabType[];
}

interface PlayerType {
  id: string;
  name: string;
  avatar: string;
  categories: CategoryType[];
}

interface TabType {
  id: number;
  name: string;
  type: string;
  content: string;
}

const playerMock: PlayerType = {
  id: "player123",
  name: "Maxwell Edison",
  avatar: "maxwell_avatar.jpg",
  categories: [
    {
      id: 0,
      name: "Strategy Games",
      tabs: [
        {
          id: 0,
          name: "Game Mechanics",
          type: "text",
          content: "game_mechanics_video.mp4",
        },
        {
          id: 1,
          name: "Advanced Strategies",
          type: "text",
          content: "Detailed text about advanced strategies in strategy games.",
        },
        {
          id: 2,
          name: "Pro Tips",
          type: "text",
          content: "pro_tips_image.jpg",
        },
      ],
    },
    {
      id: 1,
      name: "Role Playing",
      tabs: [
        {
          id: 0,
          name: "Character Building",
          type: "text",
          content: "Guide on how to build a strong character.",
        },
        {
          id: 1,
          name: "World Lore",
          type: "text",
          content: "world_lore_podcast.mp3",
        },
      ],
    },
    {
      id: 2,
      name: "Arcade",
      tabs: [
        {
          id: 0,
          name: "High Scores",
          type: "text",
          content: "List of high scores and players.",
        },
        {
          id: 1,
          name: "Game Reviews",
          type: "text",
          content: "game_reviews_video.mp4",
        },
      ],
    },
  ],
};

const campaignMock: CampaignType = {
  players: [],
  config: {
    difficulty: "Expert",
    timeLimit: "4 hours",
    region: "Global",
    language: "English",
  },
  categories: [
    {
      id: 0,
      name: "World Lore",
      tabs: [
        {
          id: 0,
          name: "Deuses",
          type: "text",
          content: `# **A história dos deuses**



* **A Fundação**
  * Foi o período em que o mundo foi criado.
  * Nesse período os deuses são conhecidos como Deuses Criadores.
  * Foi um período marcado por ataques de seres primordiais.
  * Esses ataques marcaram a divisão dos deuses entre Deuses Primordiais e Deuses Traidores, o motivo será explicado nas sessões 5.2 e 5.3
  * Foi também o período em que os Deuses Primordiais concederam a magia para que suas criações pudessem se defender dos ataques dos seres primordiais.
  * Com a magia, o povo foi capaz de banir os Deuses Traidores para outros planos, nos quais eles ficaram aprisionados.



* **Era de Arcanum**
  * A origem da Era de Arcanum é dada pelo uso crescente de magia.
  * Foi o período da arrogância do povo, marcado pelos desafios aos deuses.
  * Inspirado pela ascensão da Rainha Corvo ao patamar de divindade, o arquimago Vespin Chloras, em busca de poder, libertou os Deuses Traidores de suas prisões.
  * Os Deuses Traidores, agora corrompidos pelo longo período de aprisionamento, buscaram destruir o mundo que outrora criaram.
  * Os Deuses Traidores construíram a cidade de Ghor Dranas, o ponto de partida de seu plano para destruição do mundo. 
  * O primeiro ataque a partir de Ghor Dranas foi em Lustril, o que fez com que o povo iniciasse a criação de itens e artefatos mágicos que pudessem matar deuses, dessa forma poderiam se defender dos Deuses Traidores.



* **A Calamidade**
  * Foi uma guerra entre os Deuses Traidores e os Deuses Primordiais, e muitas de suas criações mortais pereceram nas batalhas.
  * Apenas um terço da população do mundo sobreviveu à Calamidade.
  * Os Deuses Traidores perderam e foram banidos novamente para outros planos.



* **A Divergência**
  * Após a vitória dos Deuses Primordiais e o banimento dos Deuses Traidores para outros planos, os Deuses Primordiais decidiram que sua influência no mundo era perigosa.
  * Os Deuses primordiais criaram o Portão Divino, que impede todos os Deuses Criadores (Deuses Primordiais e Traidores) de entrarem fisicamente no Plano Material.



# **Deuses Primordiais**

* São os Deuses Criadores que decidiram ajudar o povo na luta contra os ataques dos seres primordiais durante A Fundação.
* Foram os criadores do Portão Divino que marcou o início da Divergência.
* Importante descobrir quais deuses fazem parte desse grupo.



# **Deuses Traidores**

* São os Deuses Criadores que decidiram abandonar o povo na luta contra os ataques dos seres primordiais durante A Fundação.
* Acreditavam ser melhor recomeçar em outro lugar.
* Importante descobrir quais deuses fazem parte desse grupo.
          `,
        },
        {
          id: 1,
          name: "Lugares",
          type: "text",
          content: `# **Valstrits Zel**

* Em seu início, a população era predominantemente composta por halflings, mas atualmente é o território com a população mais mestiça das que compõem o continente de Scrimura, sendo caracterizada principalmente por humanos, orcs e elfos.
* O atual governante da região é Alton, chá de folha, o halfling responsável pela criação da Escola de Belavis.
* As principais fontes de subsistência do povo dessa região é pesca, colheita e agropecuária.
* É fácil de encontrar na região templos de Chauntea, Eldath e Sune.
* A região atualmente está tomada de mortos-vivos.



# **Esterosa**

* O reino de Esterosa é a terra dos elfos, porém também conta com uma quantidade expressiva de gnomos em sua população.
* Possui uma das maiores escolas de magia do continente de Scrimura, a escola de Farnis.
* O reino é governado por um conselho de cinco governantes, sendo que não se sabe ao certo como são decididos, mas um é sempre gnomo.
* Atividades de destaque em Esterosa são a arte, os estudos, o artesanato e a costura.



## **Amphail**

* Antiga cidade de Amphail, extinta por Nesseus após o ritual realizado com auxílio do Celin.



## **Mastoofan**

* Cidade governada por Elanin Silverall.
* Local onde os Pequenos Gigantes foram premiados pelos seu serviços prestados ao resolver os ataques realizados pelos gigantes.
* A cidade foi a primeira a ser tomada pelo Conclave Cromático e hoje em dia parece ser o centro de sua influência.
* Possuía um Templo do Conhecimento, dedicado a Oghma e que era regido pela Relatora Anciã Salyndra Shaern, que foi morta pelo dragão branco no ataque do Conclave Cromático.
  * A relatora foi responsável por nos informar da história dos deuses que consta no tópico 5.



# **Grotsvat**

* O reino de Grotsvat foi criado por um grupo de cerca de 30 humanos há mais de 500 anos.
* Antes de sua colonização, Grotsvat fazia parte dos territórios conhecidos como Reinos Livres.
* Foi apoiado inicialmente por Esterosa.
  * Esse apoio explica a vasta população de meio-elfos na região.
* É governado por uma tríplice coroa, que é formada por dois humanos e um meio-elfo.
* Dizem que Helm abençoou o local em sua criação, o que garantiu a prosperidade do reino e, por conta disso, templos desse deus são facilmente encontrados pela região



## **Relógio cego**

* Cidade na floresta de Grotsvat.
* É governada por um conselho religioso.



# **Britsvall**

* O reino de Britsvall é a terra dos anões.
* A família Storunn governa o reino desde que foi fundado, passando o trono sempre para o sucessor homem mais velho.
* O atual rei de Britsvall é Flint Storunn



## **Tazuten**

* Cidade no deserto de Britsvall.
* Possui uma imensa forja e habilidosos ferreiros, como Waylon Dothy.
* Foi o local da batalha entre os Pequenos Gigantes e Osea, o dragão negro, na qual os Pequenos Gigantes saíram vitoriosos.



# **Grundar**

* Grundar é a terra dos orcs.
* Os orcs não eram organizados sob um governo centralizado até a chegada de Obould, da tribo Muitas-Flechas.
* Atualmente os orcs são liderados por Obould.
  * Obould é considerado pelos orcs uma lenda de guerra e, sob seu comando, eles ampliaram o território de Grundar ao vencer a Guerra da Caverna.
  * Foi dito por Rogan que Obould negou os ensinamentos de Gruumsh e por conta disso a sociedade orc está em guerra civil.



# **Lustril**

* O reino de Lustril, também conhecido como Inferno Escaldante,  é governado por draconatos.
* Atualmente é governado pelo rei Nadarr Turnoth.
  * O local esbanja por vários lugares as imagens de Bahamut, mas Nadar decretou que os homens lagarto foram responsáveis pela morte de seu meio irmão e decretou o genocídio da raça.
* É onde fica localizado o Mar Vermelho.
  * Não se sabe ao certo a origem do Mar Vermelho.
  * Alguns acreditam que foi criado por Falcor, para demonstrar seu poder, mas outros acreditam apenas que seu surgimento foi causado pelos resquícios de um antigo vulcão.



# **Reinos Livres**

* Pouco é o conhecimento sobre os Reinos Livres.
* Alguns boatos dizem que povos de raças exóticas vivem no local.
* Outros boatos dizem que as principais entradas para o mundo subterrâneo se encontram na região, o que possibilita o acesso à povos como os drows.



## **Ghor Dranas**

* Cidade criada pelos Deuses Traidores para servir como sua base durante a Guerra da Divergência.`,
        },
      ],
    },
    {
      id: 1,
      name: "Pacts",
      tabs: [
        {
          id: 0,
          name: "Gregory - Asmodeus",
          type: "text",
          content: `**Contrato de Asmodeus:**



Prefácio: Gregory Mendel, a pessoa que busca os poderes concedidos nesta documentação legal é chamada de Contratado. Da mesma forma, o produtor e concedente dos referidos benefícios passará a ser conhecido como Contratante. O Poder Supremo e o terceiro pelo qual este documento vinculativo pode ser anulado é conhecido como Asmodeus, O Arquidemônio, Príncipe Negro, O Primeiro, Deus-Demônio, Rei do Inferno, Senhor das Trevas, Senhor do Inferno, Senhor do Poço , Mestre das Bruxas, Príncipe das Trevas, Príncipe dos Demônios, Príncipe do Inferno, Príncipe da Lei, Governante do Inferno; qualquer parte representante do Poder Supremo, exemplos incluem, mas não estão limitados a: Basileus, Filho dos Sóis, Príncipe dos Paraísos, Jadros Voax, Baphon, Baphon Reborn, o Oliphant Sangrento, o Sétimo Spawn, Vexsoul; Mefistófeles, Filho Carmesim, Rei Demônio, Senhor da Oitava, Mercador de Almas, Senescal do Inferno; Baalzebul, Senhor das Moscas, Anjo do Inferno, o Filho Branco, o Filho Negro, Senhor do Sétimo, o Senhor daquilo que Voa; Glasya Princesa do Inferno, Senhor do Sexto, o Prodígio das Trevas, o Autor do Derramamento de Sangue; Levistus, Príncipe da Stygia, Senhor do Quinto, o Gelado; Fierna, Senhora da Quarta, Arquiduquesa; Mamom, Príncipe Ardente, Príncipe Argênteo, o Incontável, Agarrando, Palma Aberta, Espírito em Ouro, Senhor do Terceiro, o Duas Vezes Caído, Mamon; Dispater, Senhor do Ferro, Pai de Dis, Primeiro Rei, Rei do Ferro, Olho de Asmodeus, Mestre da Torre, Senhor do Segundo; Zariel, Arquiduquesa de Avernus, Senhora do Primeiro; também pode falar em nome da Asmodeus e anular o contrato; ou qualquer representante nomeado da Asmodeus com prova escrita e consentimento do próprio Poder Supremo. A Lei Baatezu determina que qualquer tentativa do contratado de forçar sua conformidade no cumprimento deste contrato anulará o referido contrato imediatamente. Finalmente, nenhuma tentativa de destruir este contrato por qualquer meio: arcano, físico, divino, natural, colocando-o em um lugar onde se sabe que será destruído, convencendo alguém a destruí-lo para você ou usando qualquer outro meio ao seu alcance para destruí-lo não são permitidos. Tentar isso perderá a alma do contratado.

 

**Introdução:** 



Quaisquer poderes explicitamente concedidos a você por este contrato não são vendidos ao Signatário. É um empréstimo de poder e é algo que está sujeito aos termos listados (consulte os detalhes da negociação.) Será fornecido um dispositivo para guardar a versão do contrato do Signatário, com um meio mecânico de abertura que só é conhecido pelo Signatário, Contratante e pelos representantes previamente listados da Asmodeus. O Signatário não pode voluntariamente fornecer informações sobre como abrir esta caixa, nem será permitido ao Signatário discutir essas informações confidenciais, a menos que previamente acordado com o Contratante por meio de um contrato por escrito. Este contrato é intransferível e não pode ser retirado do Signatário original, a menos que haja intervenção de um arquidiabo ou de um representante da Asmodeus. A alma do Signatário é perdida se quebrar qualquer uma das seguintes regras: tentar selar sua alma como um lich, tentar pedir ajuda a um ser divino para quebrar o contrato ou como um método de salvar sua alma de Baator, fazer um contrato com um demônio de qualquer tipo, fazer um contrato com um yugoloth envolvendo a alma do Signatário, outras ofensas que o Signatário achar viável, atacar o Signatário, contratar outros para atacar o Signatário, causar a morte do Signatário intencionalmente, causar a morte do Contratante involuntariamente, apelar para um diabo maior do que o Contratante além de Asmodeus ou os Arquedemonios com um contrato para a alma, impedir as agendas listadas do  intencionalmente (ver Apêndice A), lançar um feitiço de desejo para quebrar o contrato, roubar o Signee's versão do contrato, contratar outros para roubar a versão do contrato do Signatário e/ou causar a destruição ou roubo do contrato do Signatário intencionalmente. Ou se o Signatário cumprir qualquer um dos requisitos do quinto parágrafo da seção de barganha.



Além disso, a lei Baator é apoiada pelo poder do próprio Asmodeus, a intervenção de um “deus” maior só vai tão longe. A boa vontade e graça que eu, o contratante, acabei de mostrar ao advertir o Signatário serão notadas verbalmente pelo Signatário ao assinar, a maioria dos demônios não irá tão longe para proteger o contratado de acreditar falsamente no poder supremo dos seres denominados como “ Deuses." Além disso, um Príncipe Demônio também não conseguirá quebrar o contrato. Um ser do Reino Distante também não poderá quebrar o contrato. Um ser de Hades também não poderá quebrar o contrato. Um ser do Plano Material também não poderá quebrar o contrato. Um ser do plano Astral também não poderá quebrar o contrato. Qualquer ser dos planos Primordiais também não poderá quebrar o contrato. Finalmente, qualquer ser sem o consentimento da Asmodeus será incapaz (dentro de todas as suposições lógicas) de quebrar o contrato. O contratante tendo sido avisado e tendo sido transparente com o contratado, os termos do acordo permanecem.



**Detalhes da Barganha:** 



O Contratante garante uma passagem rápida pelo Avernus para onde quer que o contratado designe dentro do poder do contratante e dentro do Avernus. Esta área pode não ser um local onde demônios maiores impediriam o contratante de entrar. Esta área não pode ser qualquer local em Avernus que o contratante saiba que trará grande perigo ao contratado.



O contratante garante a segurança de quaisquer demônios menores que tentem fazer mal ao grupo do contratado. Se quaisquer demônios ou demônios maiores fizerem o mesmo, o contratante consente em sua própria defesa. Tendo concordado com isso, o contratante apenas fornecerá ajuda ao grupo do contratado contra demônios menores, caso o grupo do contratado faça o mesmo.



O Contratado garante que todas as informações fornecidas ao contratante pelo contratado serão verdadeiras.



O Contratante irá fornecer informações verdadeiras sobre 3 perguntas feitas pelo contratante no momento em que o contrato é assinado.



**Apêndice A:**



Lista de situações que o contratado não deve interferir:



As promoções e o status do contratante como um demônio. Isso inclui, mas não se limita a caluniar o Signatário na frente de seus superiores, trazer essa barganha na conversa como uma coisa da qual se livrar ou, novamente, reclamar da escolha de comida do Signatário.



O contratante promete não interferir de forma diretamente danosa e nem ampliar seus domínios para os planos materiais e feéricos nos próximos 100 anos.



O contratado itã devolver ao contratante Akmon, o Martelo do Propósito, sem danificado, dar o martelo alguém com esse intuito, pedir a ajuda de um Deus ou qualquer ser forte o suficiente para destruí-lo, esconder o martelo ou dar a alguém para escondê-lo. A partir do momento da posse de Akmon, o contratado tem 7 dias para retornar o item ao contratante.
`,
        },
      ],
    },
    {
      id: 2,
      name: "Organizações",
      tabs: [
        {
          id: 0,
          name: "Valstrits Zel",
          type: "text",
          content: `* **Escola de Belavis**
  * Criada por Alton, chá de folha, o atual governante de Valstrits Zel.`,
        },
        {
          id: 1,
          name: "Esterosa",
          type: "text",
          content: "Latest scoreboard of trivia challenges.",
        },
        {
          id: 2,
          name: "Britsvall",
          type: "text",
          content: "",
        },
        {
          id: 3,
          name: "Grotsvat",
          type: "text",
          content: "",
        },
        {
          id: 4,
          name: "Lustril",
          type: "text",
          content: "",
        },
        {
          id: 5,
          name: "Reinos Livres",
          type: "text",
          content: "",
        },
        {
          id: 6,
          name: "Ghor Dranas",
          type: "text",
          content: "",
        },
        {
          id: 7,
          name: "Grundar",
          type: "text",
          content: "",
        },
      ],
    },
    {
      id: 3,
      name: "Arcade",
      tabs: [
        {
          id: 0,
          name: "High Scores",
          type: "text",
          content: "List of high scores and players.",
        },
        {
          id: 1,
          name: "Game Reviews",
          type: "text",
          content: "game_reviews_video.mp4",
        },
      ],
    },
    {
      id: 4,
      name: "Inventory",
      tabs: [
        {
          id: 0,
          name: "Boris",
          type: "inventory",
          content: "List of items in Boris inventory.",
        },
        {
          id: 1,
          name: "Polaco",
          type: "inventory",
          content: "List of items in Polaco inventory.",
        },
        {
          id: 2,
          name: "Lupus",
          type: "inventory",
          content: "List of items in Lupus inventory.",
        },
        {
          id: 3,
          name: "Gregory",
          type: "inventory",
          content: "List of items in Gregory inventory.",
        },
        {
          id: 4,
          name: "Celim",
          type: "inventory",
          content: "List of items in Celim inventory.",
        },
        {
          id: 5,
          name: "Liara",
          type: "inventory",
          content: "List of items in Liara inventory.",
        },
        {
          id: 6,
          name: "Vutho",
          type: "inventory",
          content: "List of items in Vutho inventory.",
        },
      ],
    },
    {
      id: 5,
      name: "Strategy",
      tabs: [
        {
          id: 0,
          name: "Game Mechanics",
          type: "text",
          content: "game_mechanics_video.mp4",
        },
        {
          id: 1,
          name: "Expert Talks",
          type: "text",
          content: "expert_talks_podcast.mp3",
        },
        {
          id: 2,
          name: "Pro Tips",
          type: "text",
          content: "pro_tips_image.jpg",
        },
        {
          id: 3,
          name: "Game Reviews",
          type: "text",
          content: "game_reviews_video.mp4",
        },
        {
          id: 4,
          name: "Strategy Guides",
          type: "text",
          content: "Text on how to play strategy games.",
        },
        {
          id: 5,
          name: "Strategy Maps",
          type: "text",
          content: "strategy_maps.jpg",
        },
      ],
    },
  ],
  backdropImage: "campaign_backdrop.jpg",
};

export { playerMock };

export default campaignMock;
