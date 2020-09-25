//Module
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const axios = require("axios");
const Canvas = require("canvas");
const { createCanvas, loadImage, registerFont } = require("canvas");

//Start Bot
client.on("ready", () => {
  console.log("Aisha Está pronta para prever o tempo!");
});

//Catch Command
client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  const woeid =
    "https://api.hgbrasil.com/weather?format=json-cors&key=01cd1fad&woeid=";

  if (command === "tempo") {
    switch (args[0]) {
      case "clear":
        const findEmbed = new Discord.MessageEmbed()
          .setTitle("Deseja ver o tempo de qual cidade?")
          .setDescription(
            "SP - São Paulo \n RJ - Rio de Janeiro \n RO - Rondônia \n AC - Acre \n AM - Amazonas \n RR - Roraima \n PA - Pará \n AP - Amapá \n TO - Tocantins \n MA - Maranhão \n PI - Piauí \n CE - Ceará \n RN - Rio Grande do Norte \n PB - Paraíba \n PE - Pernambuco \n AL - Alagoas \n SE - Sergipe \n BA - Bahia \n MG - Minas Gerais \n ES - Espírito Santo \n PR - Paraná \n SC - Santa Catarina \n RS - Rio Grande do Sul \n MS - Mato Grosso do Sul \n MT - Mato Grosso \n GO - Goiás \n DF - Distrito Federal"
          )
          .setColor("#8A2BE2")
          .setFooter(
            "Dica: Utilize !tempo <ESTADO> Para Saber o Tempo Do Estado!"
          )
          .setTimestamp();
        message.channel.send(findEmbed);
        break;

      case "SP":
        const response_sp = await axios.get(`${woeid}455827`).catch((err) => {
          console.log("Esse é o erro: " + err);
        });
        weatherImage(response_sp, message);
        break;

      case "RJ":
        const response_rj = await axios.get(`${woeid}90200703`);
        weatherImage(response_rj, message);
        break;

      case "RO":
        const response_ro = await axios.get(`${woeid}12511373`);
        weatherImage(response_ro, message);
        break;

      case "AC":
        const response_ac = await axios.get(`${woeid}2347572`);
        weatherImage(response_ac, message);
        break;
      case "AM":
        const response_am = await axios.get(`${woeid}12511115`);
        weatherImage(response_ac, message);
        break;
      case "RR":
        const response_rr = await axios.get(`${woeid}12524536`);
        weatherImage(response_ac, message);
        break;
      case "PA":
        const response_pa = await axios.get(`${woeid}12511012`);
        weatherImage(response_ac, message);
        break;
      case "AP":
        const response_ap = await axios.get(`${woeid}12511218`);
        weatherImage(response_ac, message);
        break;
      case "TO":
        const response_to = await axios.get(`${woeid}12523650`);
        weatherImage(response_ac, message);
        break;
      case "MA":
        const response_ma = await axios.get(`${woeid}12511227`);
        weatherImage(response_ac, message);
        break;
      case "PI":
        const response_pi = await axios.get(`${woeid}457059`);
        weatherImage(response_ac, message);
        break;
      case "CE":
        const response_ce = await axios.get(`${woeid}12511272`);
        weatherImage(response_ac, message);
        break;
      case "RN":
        const response_rn = await axios.get(`${woeid}12511038`);
        weatherImage(response_ac, message);
        break;
      case "PB":
        const response_pb = await axios.get(`${woeid}12511287`);
        weatherImage(response_ac, message);
        break;
      case "PE":
        const response_pe = await axios.get(`${woeid}12511269`);
        weatherImage(response_ac, message);
        break;
      case "AL":
        const response_al = await axios.get(`${woeid}12511069`);
        weatherImage(response_ac, message);
        break;
      case "SE":
        const response_se = await axios.get(`${woeid}12511305`);
        weatherImage(response_ac, message);
        break;
      case "BA":
        const response_ba = await axios.get(`${woeid}12511284`);
        weatherImage(response_ac, message);
        break;
      case "MG":
        const response_mg = await axios.get(`${woeid}12511339`);
        weatherImage(response_ac, message);
        break;
      case "ES":
        const response_es = await axios.get(`${woeid}12511159`);
        weatherImage(response_ac, message);
        break;
      case "PR":
        const response_pr = await axios.get(`${woeid}12511085`);
        weatherImage(response_ac, message);
        break;
      case "SC":
        const response_sc = await axios.get(`${woeid}12511104`);
        weatherImage(response_ac, message);
        break;
      case "RS":
        const response_rs = await axios.get(`${woeid}12511068`);
        weatherImage(response_ac, message);
        break;
      case "MS":
        const response_ms = await axios.get(`${woeid}12511113`);
        weatherImage(response_ac, message);
        break;
      case "MT":
        const response_mt = await axios.get(`${woeid}12511328`);
        weatherImage(response_ac, message);
        break;
      case "GO":
        const response_go = await axios.get(`${woeid}12511301`);
        weatherImage(response_ac, message);
        break;
      case "DF":
        const response_df = await axios.get(`${woeid}12511058`);
        weatherImage(response_ac, message);
        break;

      default:
        const findEmbed2 = new Discord.MessageEmbed()
          .setTitle("Cidade inválida")
          .setDescription(
            "SP - São Paulo \n RJ - Rio de Janeiro \n RO - Rondônia \n AC - Acre \n AM - Amazonas \n RR - Roraima \n PA - Pará \n AP - Amapá \n TO - Tocantins \n MA - Maranhão \n PI - Piauí \n CE - Ceará \n RN - Rio Grande do Norte \n PB - Paraíba \n PE - Pernambuco \n AL - Alagoas \n SE - Sergipe \n BA - Bahia \n MG - Minas Gerais \n ES - Espírito Santo \n PR - Paraná \n SC - Santa Catarina \n RS - Rio Grande do Sul \n MS - Mato Grosso do Sul \n MT - Mato Grosso \n GO - Goiás \n DF - Distrito Federal"
          )
          .setColor("#8A2BE2")
          .setFooter(
            "Dica: Utilize !tempo <ESTADO> Para Saber o Tempo Do Estado!"
          )
          .setTimestamp();
        message.channel.send(findEmbed2);
        break;
    }
  }
});

async function weatherImage(response, message) {
  //const response = await axios.get("https://api.hgbrasil.com/weather?woeid=90200703")
  const data = response.data;
  const posX = 1000;
  const posY = 500;
  const canvas = createCanvas(posX, posY, "png");
  const ctx = canvas.getContext("2d");

  //desenha o background
  ctx.fillStyle = "WHITE";
  ctx.fillRect(0, 0, posX, posY);

  //desenha as linhas!
  ctx.beginPath();
  ctx.moveTo(0, 250);
  ctx.lineTo(1000, 250);
  ctx.strokeStyle = "#6c757d";
  ctx.stroke();

  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(250, 250);
  ctx.lineTo(250, 500);
  ctx.strokeStyle = "#6c757d";
  ctx.stroke();

  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(500, 250);
  ctx.lineTo(500, 500);
  ctx.strokeStyle = "#6c757d";
  ctx.stroke();

  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(750, 250);
  ctx.lineTo(750, 500);
  ctx.strokeStyle = "#6c757d";
  ctx.stroke();

  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(1000, 250);
  ctx.lineTo(1000, 500);
  ctx.strokeStyle = "#6c757d";
  ctx.stroke();

  //desenhar os textos principais
  ctx.font = "27px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "left";
  ctx.fillText(data.results.city, 62, 85);

  ctx.font = "12px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "left";
  ctx.fillText("Nascer Do Sol: " + data.results.sunrise, 100, 115);

  ctx.font = "12px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "left";
  ctx.fillText("Pôr Do Sol: " + data.results.sunset, 107, 135);

  ctx.font = "27px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "left";
  ctx.fillText(data.results.temp + "° C", 750 + 75, 90);

  ctx.font = "12px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "left";
  ctx.fillText(data.results.description, 820, 115);

  //desenhar a imagem principal
  const principarIMG = `/opt/discord/BotWeather/assetsWeather/${data.results.condition_slug}.png`;
  const principal = await Canvas.loadImage(principarIMG);
  ctx.drawImage(principal, 500 - 75, 35, 150, 150);

  //desenhar segundo dia
  ctx.font = "16px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    data.results.forecast[1].weekday + " - " + data.results.forecast[1].date,
    125,
    290
  );

  const segundoIMG = `/opt/discord/BotWeather/assetsWeather/small/${data.results.forecast[1].condition}.png`;
  const segundo = await Canvas.loadImage(segundoIMG);
  ctx.drawImage(segundo, 125 - 32, 300, 64, 64);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(data.results.forecast[1].description, 125, 370);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText("Min: " + data.results.forecast[1].min + "° C", 125, 380 + 30);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText("Max: " + data.results.forecast[1].max + "° C", 125, 400 + 34);

  //desenhar terceiro dia
  ctx.font = "16px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    data.results.forecast[2].weekday + " - " + data.results.forecast[2].date,
    125 + 250,
    290
  );

  const terceiroIMG = `/opt/discord/BotWeather/assetsWeather/small/${data.results.forecast[2].condition}.png`;
  const terceiro = await Canvas.loadImage(terceiroIMG);
  ctx.drawImage(terceiro, 125 - 32 + 250, 300, 64, 64);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(data.results.forecast[2].description, 125 + 250, 370);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    "Min: " + data.results.forecast[2].min + "° C",
    125 + 250,
    380 + 30
  );

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    "Max: " + data.results.forecast[2].max + "° C",
    125 + 250,
    400 + 34
  );

  //desenhar quarto dia
  ctx.font = "16px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    data.results.forecast[3].weekday + " - " + data.results.forecast[3].date,
    125 + 250 + 250,
    290
  );

  const quartoIMG = `/opt/discord/BotWeather/assetsWeather/small/${data.results.forecast[3].condition}.png`;
  const quarto = await Canvas.loadImage(quartoIMG);
  ctx.drawImage(quarto, 125 - 32 + 250 + 250, 300, 64, 64);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(data.results.forecast[3].description, 125 + 250 + 250, 370);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    "Min: " + data.results.forecast[3].min + "° C",
    125 + 250 + 250,
    380 + 30
  );

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    "Max: " + data.results.forecast[3].max + "° C",
    125 + 250 + 250,
    400 + 34
  );

  //desenhar quinto dia
  ctx.font = "16px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    data.results.forecast[4].weekday + " - " + data.results.forecast[4].date,
    125 + 250 + 250 + 250,
    290
  );

  const quintoIMG = `/opt/discord/BotWeather/assetsWeather/small/${data.results.forecast[4].condition}.png`;
  const quinto = await Canvas.loadImage(quintoIMG);
  ctx.drawImage(quinto, 125 - 32 + 250 + 250 + 250, 300, 64, 64);

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    data.results.forecast[4].description,
    125 + 250 + 250 + 250,
    370
  );

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    "Min: " + data.results.forecast[4].min + "° C",
    125 + 250 + 250 + 250,
    380 + 30
  );

  ctx.font = "13px Nunito SemiBold";
  ctx.fillStyle = "#6c757d";
  ctx.textAlign = "center";
  ctx.fillText(
    "Max: " + data.results.forecast[4].max + "° C",
    125 + 250 + 250 + 250,
    400 + 34
  );

  var buf = canvas.toBuffer();
  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "weather.png"
  );
  message.channel.send(attachment);
}

//Token Acess
client.login(config.token);
