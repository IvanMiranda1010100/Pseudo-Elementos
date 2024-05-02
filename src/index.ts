import { header} from "./Components/header/header";
import { titulo } from "./Components/titulo/titulo";
import { text } from "./Components/text/text";
import { subtitle } from "./Components/Subtitulo/subtitle";
import { parrafe } from "./Components/parrafe/parrafe";
import { textoImportant } from "./Components/text-important/text-important";
import { label } from "./Components/label/label";
import { buttonSend } from "./Components/button-send/button";
import { footer } from "./Components/footer/footer";
import "./index.css"

(function main(){
  header();
  titulo();
  text();
  subtitle();
  parrafe();
  textoImportant();
  label();
  buttonSend();
  footer();
})()

