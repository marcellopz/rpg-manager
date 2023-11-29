// import { CampaignType, InventoryContent, PlayerType } from "../campaignTypes";

// const inventoryMock: InventoryContent = {
//   playerName: "JohnDoe",
//   playerAvatar: "avatarURL",
//   inventory: [
//     {
//       numberOfItems: 3,
//       item: {
//         weight: 1,
//         name: "Healing Potion",
//         type: "consummable",
//       },
//     },
//     {
//       numberOfItems: 2,
//       item: {
//         weight: 5,
//         name: "Magic Sword",
//         type: "magic",
//       },
//     },
//     {
//       numberOfItems: 1,
//       item: {
//         weight: 10,
//         name: "Iron Shield",
//         type: "normal",
//       },
//     },
//   ],
// };

// const playerMock: PlayerType = {
//   id: "player123",
//   name: "Maxwell Edison",
//   avatar: "maxwell_avatar.jpg",
//   categories: [
//     {
//       id: 0,
//       name: "Strategy Games",
//       tabs: [
//         {
//           id: 0,
//           name: "Game Mechanics",
//           type: "text",
//           content: "game_mechanics_video.mp4",
//         },
//         {
//           id: 1,
//           name: "Advanced Strategies",
//           type: "text",
//           content: "Detailed text about advanced strategies in strategy games.",
//         },
//         {
//           id: 2,
//           name: "Pro Tips",
//           type: "text",
//           content: "pro_tips_image.jpg",
//         },
//       ],
//     },
//     {
//       id: 1,
//       name: "Role Playing",
//       tabs: [
//         {
//           id: 0,
//           name: "Character Building",
//           type: "text",
//           content: "Guide on how to build a strong character.",
//         },
//         {
//           id: 1,
//           name: "World Lore",
//           type: "text",
//           content: "world_lore_podcast.mp3",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Arcade",
//       tabs: [
//         {
//           id: 0,
//           name: "High Scores",
//           type: "text",
//           content: "List of high scores and players.",
//         },
//         {
//           id: 1,
//           name: "Game Reviews",
//           type: "text",
//           content: "game_reviews_video.mp4",
//         },
//       ],
//     },
//   ],
// };

// const campaignMock: CampaignType = {
//   players: {},
//   config: {},
//   id: "123",
//   name: "Scrimura",
//   creatorId: "creator123",
//   description: `# **Scrimura**`,
//   categories: [
//     {
//       id: 0,
//       name: "Contexto geral",
//       tabs: [
//         {
//           id: 0,
//           name: "História",
//           type: "text",
//           content: `# A Guerra da Caverna&#x20;

// Assim denominada pelos vencedores, essa guerra teve início há cerca de 15 anos, com fim após 2 anos de duração. Nesse tempo, os Orcs ampliaram sua população de forma significativa e, coordenados por Obould, juntamente numa aliança com gigantes, eles destroçaram em campo de batalha as forças Draconicas e Anãs. Quando ambos acharam que Obould iria continuar seu avanço, de forma inusitada, ele ofereceu um acordo de paz, que foi aceito por ambos. Esse acordo confundiu bastante os Orcs que estão sob seu comando, divindo as opiniões em duas: ou Obould fez uma jogada inteligente para ganhar tempo, ou ele desviou dos caminhos de Gruumsh e precisa ser destruido. Até hoje não se sabe ao certo o motivo de Obould ter encerrado a guerra, porém o seu governo continua forte perante a maioria dos Orcs.&#x20;

// # A Morte do Rei Marius&#x20;

// Há cerca de 22 anos, por volta de 1442, o Rei Marius - conhecido como o Rei Bondoso - foi assassinado junto com sua família durante a noite.&#x20;

// Nadarr, o seu meio irmão, se auto-proclamou defensor do reino e informou para a população que ele teria sido assassinado pelos Homens Lagartos, uma raça criada para servir a família real.&#x20;

// # A Purgação&#x20;

// Após o assassinato do Rei Marinus e Nadarr assumir o posto como defensor do reino, ele proclamou também que os Homens Lagarto eram inimigos da coroa e iniciou um massacre. Nos anos subsequentes, que entraram para a história como A Purgação, milhares de Homens Lagarto foram caçados e mortos no reino de Lustril. Esses formidáveis guerreiros que serviram a coroa por mais de 500 anos, agora encontram-se a beira da extinção.`,
//         },
//         {
//           id: 1,
//           name: "Personalidades Importantes",
//           type: "text",
//           content: `### Flint Storunn (Anão, cerca de 450 anos, L/B)&#x20;

// Flint é o atual Rei de Britsvall. É um grande responsável pelo crescimento econômico da sociedade anã, estimula bastante principalmente a forja. Não apresenta uma aparência robusta, mas dizem carregar uma grande inteligência.&#x20;

// ***

// ### Nadarr Turnoth (Draconato, cerca de 40 anos, L/N)&#x20;

// Nadarr atualmente é o rei de Lustril. Comanda o local com pulso firme, juntamente com seus conselheiros. Pune severamente os que considera criminosos.&#x20;

// ***

// ### Obould Muitas-Flechas (Orc, idade desconhecida, C/N)&#x20;

// Obould é o líder Orc que unificou pela primeira vez a nação na história, além de ser um grande general de guerra. Suas intenções atualmente são desconhecidas.&#x20;

// ***

// ### Alton Chá de Folha (Hafling, cerca de 70 anos, L/B)&#x20;

// Alton é o atual governante de Valstris Zel, eleito há cerca de 4 anos. Nesse meio de governo, ele propagou bastante o desenvolvimento das artes no Reino, principalmente as musicais e pinturas, criando a Escola de Bellavis.&#x20;

// ***

// ### Orianna Art (Tiefling, idade desconhecida, C/N)&#x20;

// Orianna é uma Tiefling mundialmente famosa por ser uma seguidora assídua de Mask. É capaz de roubar até os seres mais poderosos.&#x20;

// ***

// ### Mei Tan (Humana, cerca de 25 anos, N/N)&#x20;

// Mei é uma figura um tanto quanto particular. Uma humana que, apesar de nova, esbanjava sabedoria. A última informação que se tem sobre ela, é que se perder nos Reinos Livres.&#x20;

// ***

// ### Zook (Gnomo, 370 anos, N/B)&#x20;

// Atual diretor de Faris, Zook é o primeiro Gnomo a alcançar tal posto. Dizem que a seleção para a escola se tornou menos rigorosa em seu comando.`,
//         },
//         {
//           id: 2,
//           name: "Mapa",
//           type: "text",
//           content: `![Mapa](https://media.discordapp.net/attachments/270999120917823498/1173759104217530458/Scrimura_mapa_mundi.jpg?ex=65651f59&is=6552aa59&hm=6b9dde66f89dfaa15f044b7ec581470c250d84483a157cc5b3f3399a2b46b0b3&=&width=810&height=608)`,
//         },
//       ],
//     },
//     {
//       id: 1,
//       name: "Deuses",
//       tabs: [
//         {
//           id: 0,
//           name: "História dos deuses",
//           type: "text",
//           content: `# **A história dos deuses**

// * **A Fundação**
//   * Foi o período em que o mundo foi criado.
//   * Nesse período os deuses são conhecidos como Deuses Criadores.
//   * Foi um período marcado por ataques de seres primordiais.
//   * Esses ataques marcaram a divisão dos deuses entre Deuses Primordiais e Deuses Traidores, o motivo será explicado nas sessões 5.2 e 5.3
//   * Foi também o período em que os Deuses Primordiais concederam a magia para que suas criações pudessem se defender dos ataques dos seres primordiais.
//   * Com a magia, o povo foi capaz de banir os Deuses Traidores para outros planos, nos quais eles ficaram aprisionados.

// * **Era de Arcanum**
//   * A origem da Era de Arcanum é dada pelo uso crescente de magia.
//   * Foi o período da arrogância do povo, marcado pelos desafios aos deuses.
//   * Inspirado pela ascensão da Rainha Corvo ao patamar de divindade, o arquimago Vespin Chloras, em busca de poder, libertou os Deuses Traidores de suas prisões.
//   * Os Deuses Traidores, agora corrompidos pelo longo período de aprisionamento, buscaram destruir o mundo que outrora criaram.
//   * Os Deuses Traidores construíram a cidade de Ghor Dranas, o ponto de partida de seu plano para destruição do mundo.
//   * O primeiro ataque a partir de Ghor Dranas foi em Lustril, o que fez com que o povo iniciasse a criação de itens e artefatos mágicos que pudessem matar deuses, dessa forma poderiam se defender dos Deuses Traidores.

// * **A Calamidade**
//   * Foi uma guerra entre os Deuses Traidores e os Deuses Primordiais, e muitas de suas criações mortais pereceram nas batalhas.
//   * Apenas um terço da população do mundo sobreviveu à Calamidade.
//   * Os Deuses Traidores perderam e foram banidos novamente para outros planos.

// * **A Divergência**
//   * Após a vitória dos Deuses Primordiais e o banimento dos Deuses Traidores para outros planos, os Deuses Primordiais decidiram que sua influência no mundo era perigosa.
//   * Os Deuses primordiais criaram o Portão Divino, que impede todos os Deuses Criadores (Deuses Primordiais e Traidores) de entrarem fisicamente no Plano Material.
// `,
//         },
//         {
//           id: 1,
//           name: "Deuses Primordiais",
//           type: "text",
//           content: `# **Deuses Primordiais**

// * São os Deuses Criadores que decidiram ajudar o povo na luta contra os ataques dos seres primordiais durante A Fundação.
// * Foram os criadores do Portão Divino que marcou o início da Divergência.
// * Importante descobrir quais deuses fazem parte desse grupo.

// `,
//         },
//         {
//           id: 2,
//           name: "Deuses Traidores",
//           type: "text",
//           content: `# **Deuses Traidores**

// * São os Deuses Criadores que decidiram abandonar o povo na luta contra os ataques dos seres primordiais durante A Fundação.
// * Acreditavam ser melhor recomeçar em outro lugar.
// * Importante descobrir quais deuses fazem parte desse grupo.
// `,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Lugares",
//       tabs: [
//         {
//           id: 0,
//           name: "Valstrits Zel",
//           type: "text",
//           content: `# **Valstrits Zel**

// * Em seu início, a população era predominantemente composta por halflings, mas atualmente é o território com a população mais mestiça das que compõem o continente de Scrimura, sendo caracterizada principalmente por humanos, orcs e elfos.
// * O atual governante da região é Alton, chá de folha, o halfling responsável pela criação da Escola de Belavis.
// * As principais fontes de subsistência do povo dessa região é pesca, colheita e agropecuária.
// * É fácil de encontrar na região templos de Chauntea, Eldath e Sune.
// * A região atualmente está tomada de mortos-vivos.
// `,
//         },
//         {
//           id: 1,
//           name: "Esterosa",
//           type: "text",
//           content: `# **Esterosa**

// * O reino de Esterosa é a terra dos elfos, porém também conta com uma quantidade expressiva de gnomos em sua população.
// * Possui uma das maiores escolas de magia do continente de Scrimura, a escola de Farnis.
// * O reino é governado por um conselho de cinco governantes, sendo que não se sabe ao certo como são decididos, mas um é sempre gnomo.
// * Atividades de destaque em Esterosa são a arte, os estudos, o artesanato e a costura.
// `,
//         },
//         {
//           id: 2,
//           name: "Grotsvat",
//           type: "text",
//           content: `# **Grotsvat**

// * O reino de Grotsvat foi criado por um grupo de cerca de 30 humanos há mais de 500 anos.
// * Antes de sua colonização, Grotsvat fazia parte dos territórios conhecidos como Reinos Livres.
// * Foi apoiado inicialmente por Esterosa.
//   * Esse apoio explica a vasta população de meio-elfos na região.
// * É governado por uma tríplice coroa, que é formada por dois humanos e um meio-elfo.
// * Dizem que Helm abençoou o local em sua criação, o que garantiu a prosperidade do reino e, por conta disso, templos desse deus são facilmente encontrados pela região
// `,
//         },
//         {
//           id: 3,
//           name: "Britsvall",
//           type: "text",
//           content: `# **Britsvall**

// * O reino de Britsvall é a terra dos anões.
// * A família Storunn governa o reino desde que foi fundado, passando o trono sempre para o sucessor homem mais velho.
// * O atual rei de Britsvall é Flint Storunn

// `,
//         },
//         {
//           id: 4,
//           name: "Grundar",
//           type: "text",
//           content: `# **Grundar**

// * Grundar é a terra dos orcs.
// * Os orcs não eram organizados sob um governo centralizado até a chegada de Obould, da tribo Muitas-Flechas.
// * Atualmente os orcs são liderados por Obould.
//   * Obould é considerado pelos orcs uma lenda de guerra e, sob seu comando, eles ampliaram o território de Grundar ao vencer a Guerra da Caverna.
//   * Foi dito por Rogan que Obould negou os ensinamentos de Gruumsh e por conta disso a sociedade orc está em guerra civil.
// `,
//         },
//         {
//           id: 5,
//           name: "Lustril",
//           type: "text",
//           content: `# **Lustril**

// * O reino de Lustril, também conhecido como Inferno Escaldante,  é governado por draconatos.
// * Atualmente é governado pelo rei Nadarr Turnoth.
//   * O local esbanja por vários lugares as imagens de Bahamut, mas Nadar decretou que os homens lagarto foram responsáveis pela morte de seu meio irmão e decretou o genocídio da raça.
// * É onde fica localizado o Mar Vermelho.
//   * Não se sabe ao certo a origem do Mar Vermelho.
//   * Alguns acreditam que foi criado por Falcor, para demonstrar seu poder, mas outros acreditam apenas que seu surgimento foi causado pelos resquícios de um antigo vulcão.

// `,
//         },
//         {
//           id: 6,
//           name: "Reinos Livres",
//           type: "text",
//           content: `# **Reinos Livres**

// * Pouco é o conhecimento sobre os Reinos Livres.
// * Alguns boatos dizem que povos de raças exóticas vivem no local.
// * Outros boatos dizem que as principais entradas para o mundo subterrâneo se encontram na região, o que possibilita o acesso à povos como os drows.

// `,
//         },
//         {
//           id: 7,
//           name: "Ghor Dranas",
//           type: "text",
//           content: `## **Ghor Dranas**

// * Cidade criada pelos Deuses Traidores para servir como sua base durante a Guerra da Divergência.`,
//         },
//         {
//           id: 8,
//           name: "Tazuten",
//           type: "text",
//           content: `## **Tazuten**

// * Cidade no deserto de Britsvall.
// * Possui uma imensa forja e habilidosos ferreiros, como Waylon Dothy.
// * Foi o local da batalha entre os Pequenos Gigantes e Osea, o dragão negro, na qual os Pequenos Gigantes saíram vitoriosos.

// `,
//         },
//         {
//           id: 9,
//           name: "Relógio cedo",
//           type: "text",
//           content: `## **Relógio cego**

// * Cidade na floresta de Grotsvat.
// * É governada por um conselho religioso.`,
//         },
//         {
//           id: 10,
//           name: "Amphail",
//           type: "text",
//           content: `## **Amphail**

// * Antiga cidade de Amphail, extinta por Nesseus após o ritual realizado com auxílio do Celin.
// `,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Pactos",
//       tabs: [
//         {
//           id: 0,
//           name: "Gregory - Asmodeus",
//           type: "text",
//           content: `**Contrato de Asmodeus:**

// Prefácio: Gregory Mendel, a pessoa que busca os poderes concedidos nesta documentação legal é chamada de Contratado. Da mesma forma, o produtor e concedente dos referidos benefícios passará a ser conhecido como Contratante. O Poder Supremo e o terceiro pelo qual este documento vinculativo pode ser anulado é conhecido como Asmodeus, O Arquidemônio, Príncipe Negro, O Primeiro, Deus-Demônio, Rei do Inferno, Senhor das Trevas, Senhor do Inferno, Senhor do Poço , Mestre das Bruxas, Príncipe das Trevas, Príncipe dos Demônios, Príncipe do Inferno, Príncipe da Lei, Governante do Inferno; qualquer parte representante do Poder Supremo, exemplos incluem, mas não estão limitados a: Basileus, Filho dos Sóis, Príncipe dos Paraísos, Jadros Voax, Baphon, Baphon Reborn, o Oliphant Sangrento, o Sétimo Spawn, Vexsoul; Mefistófeles, Filho Carmesim, Rei Demônio, Senhor da Oitava, Mercador de Almas, Senescal do Inferno; Baalzebul, Senhor das Moscas, Anjo do Inferno, o Filho Branco, o Filho Negro, Senhor do Sétimo, o Senhor daquilo que Voa; Glasya Princesa do Inferno, Senhor do Sexto, o Prodígio das Trevas, o Autor do Derramamento de Sangue; Levistus, Príncipe da Stygia, Senhor do Quinto, o Gelado; Fierna, Senhora da Quarta, Arquiduquesa; Mamom, Príncipe Ardente, Príncipe Argênteo, o Incontável, Agarrando, Palma Aberta, Espírito em Ouro, Senhor do Terceiro, o Duas Vezes Caído, Mamon; Dispater, Senhor do Ferro, Pai de Dis, Primeiro Rei, Rei do Ferro, Olho de Asmodeus, Mestre da Torre, Senhor do Segundo; Zariel, Arquiduquesa de Avernus, Senhora do Primeiro; também pode falar em nome da Asmodeus e anular o contrato; ou qualquer representante nomeado da Asmodeus com prova escrita e consentimento do próprio Poder Supremo. A Lei Baatezu determina que qualquer tentativa do contratado de forçar sua conformidade no cumprimento deste contrato anulará o referido contrato imediatamente. Finalmente, nenhuma tentativa de destruir este contrato por qualquer meio: arcano, físico, divino, natural, colocando-o em um lugar onde se sabe que será destruído, convencendo alguém a destruí-lo para você ou usando qualquer outro meio ao seu alcance para destruí-lo não são permitidos. Tentar isso perderá a alma do contratado.

//

// **Introdução:**

// Quaisquer poderes explicitamente concedidos a você por este contrato não são vendidos ao Signatário. É um empréstimo de poder e é algo que está sujeito aos termos listados (consulte os detalhes da negociação.) Será fornecido um dispositivo para guardar a versão do contrato do Signatário, com um meio mecânico de abertura que só é conhecido pelo Signatário, Contratante e pelos representantes previamente listados da Asmodeus. O Signatário não pode voluntariamente fornecer informações sobre como abrir esta caixa, nem será permitido ao Signatário discutir essas informações confidenciais, a menos que previamente acordado com o Contratante por meio de um contrato por escrito. Este contrato é intransferível e não pode ser retirado do Signatário original, a menos que haja intervenção de um arquidiabo ou de um representante da Asmodeus. A alma do Signatário é perdida se quebrar qualquer uma das seguintes regras: tentar selar sua alma como um lich, tentar pedir ajuda a um ser divino para quebrar o contrato ou como um método de salvar sua alma de Baator, fazer um contrato com um demônio de qualquer tipo, fazer um contrato com um yugoloth envolvendo a alma do Signatário, outras ofensas que o Signatário achar viável, atacar o Signatário, contratar outros para atacar o Signatário, causar a morte do Signatário intencionalmente, causar a morte do Contratante involuntariamente, apelar para um diabo maior do que o Contratante além de Asmodeus ou os Arquedemonios com um contrato para a alma, impedir as agendas listadas do  intencionalmente (ver Apêndice A), lançar um feitiço de desejo para quebrar o contrato, roubar o Signee's versão do contrato, contratar outros para roubar a versão do contrato do Signatário e/ou causar a destruição ou roubo do contrato do Signatário intencionalmente. Ou se o Signatário cumprir qualquer um dos requisitos do quinto parágrafo da seção de barganha.

// Além disso, a lei Baator é apoiada pelo poder do próprio Asmodeus, a intervenção de um “deus” maior só vai tão longe. A boa vontade e graça que eu, o contratante, acabei de mostrar ao advertir o Signatário serão notadas verbalmente pelo Signatário ao assinar, a maioria dos demônios não irá tão longe para proteger o contratado de acreditar falsamente no poder supremo dos seres denominados como “ Deuses." Além disso, um Príncipe Demônio também não conseguirá quebrar o contrato. Um ser do Reino Distante também não poderá quebrar o contrato. Um ser de Hades também não poderá quebrar o contrato. Um ser do Plano Material também não poderá quebrar o contrato. Um ser do plano Astral também não poderá quebrar o contrato. Qualquer ser dos planos Primordiais também não poderá quebrar o contrato. Finalmente, qualquer ser sem o consentimento da Asmodeus será incapaz (dentro de todas as suposições lógicas) de quebrar o contrato. O contratante tendo sido avisado e tendo sido transparente com o contratado, os termos do acordo permanecem.

// **Detalhes da Barganha:**

// O Contratante garante uma passagem rápida pelo Avernus para onde quer que o contratado designe dentro do poder do contratante e dentro do Avernus. Esta área pode não ser um local onde demônios maiores impediriam o contratante de entrar. Esta área não pode ser qualquer local em Avernus que o contratante saiba que trará grande perigo ao contratado.

// O contratante garante a segurança de quaisquer demônios menores que tentem fazer mal ao grupo do contratado. Se quaisquer demônios ou demônios maiores fizerem o mesmo, o contratante consente em sua própria defesa. Tendo concordado com isso, o contratante apenas fornecerá ajuda ao grupo do contratado contra demônios menores, caso o grupo do contratado faça o mesmo.

// O Contratado garante que todas as informações fornecidas ao contratante pelo contratado serão verdadeiras.

// O Contratante irá fornecer informações verdadeiras sobre 3 perguntas feitas pelo contratante no momento em que o contrato é assinado.

// **Apêndice A:**

// Lista de situações que o contratado não deve interferir:

// As promoções e o status do contratante como um demônio. Isso inclui, mas não se limita a caluniar o Signatário na frente de seus superiores, trazer essa barganha na conversa como uma coisa da qual se livrar ou, novamente, reclamar da escolha de comida do Signatário.

// O contratante promete não interferir de forma diretamente danosa e nem ampliar seus domínios para os planos materiais e feéricos nos próximos 100 anos.

// O contratado itã devolver ao contratante Akmon, o Martelo do Propósito, sem danificado, dar o martelo alguém com esse intuito, pedir a ajuda de um Deus ou qualquer ser forte o suficiente para destruí-lo, esconder o martelo ou dar a alguém para escondê-lo. A partir do momento da posse de Akmon, o contratado tem 7 dias para retornar o item ao contratante.
// `,
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: "Organizações",
//       tabs: [
//         {
//           id: 0,
//           name: "Valstrits Zel",
//           type: "text",
//           content: `* **Escola de Belavis**
//   * Criada por Alton, chá de folha, o atual governante de Valstrits Zel.`,
//         },
//         {
//           id: 1,
//           name: "Esterosa",
//           type: "text",
//           content: "Latest scoreboard of trivia challenges.",
//         },
//         {
//           id: 2,
//           name: "Britsvall",
//           type: "text",
//           content: "",
//         },
//         {
//           id: 3,
//           name: "Grotsvat",
//           type: "text",
//           content: "",
//         },
//         {
//           id: 4,
//           name: "Lustril",
//           type: "text",
//           content: "",
//         },
//         {
//           id: 5,
//           name: "Reinos Livres",
//           type: "text",
//           content: "",
//         },
//         {
//           id: 6,
//           name: "Ghor Dranas",
//           type: "text",
//           content: "",
//         },
//         {
//           id: 7,
//           name: "Grundar",
//           type: "text",
//           content: "",
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: "Inventário",
//       tabs: [
//         {
//           id: 0,
//           name: "Boris",
//           type: "inventory",
//           content: inventoryMock,
//         },
//         {
//           id: 1,
//           name: "Polaco",
//           type: "inventory",
//           content: inventoryMock,
//         },
//         {
//           id: 2,
//           name: "Lupus",
//           type: "inventory",
//           content: inventoryMock,
//         },
//         {
//           id: 3,
//           name: "Gregory",
//           type: "inventory",
//           content: inventoryMock,
//         },
//         {
//           id: 4,
//           name: "Celim",
//           type: "inventory",
//           content: inventoryMock,
//         },
//         {
//           id: 5,
//           name: "Liara",
//           type: "inventory",
//           content: inventoryMock,
//         },
//         {
//           id: 6,
//           name: "Vutho",
//           type: "inventory",
//           content: inventoryMock,
//         },
//       ],
//     },
//   ],
//   backdropImage: "",
// };

// export { playerMock };

// export default campaignMock;
