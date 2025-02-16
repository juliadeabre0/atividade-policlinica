import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.telainicial}>
      <div className={styles.campotextoinicial}>
        <h2>Bem-vindo à VitaCare!</h2>
        <p>
          Estamos aqui para cuidar da sua saúde e bem-estar com dedicação e profissionalismo. Nossa equipe está pronta para oferecer um atendimento humanizado e soluções personalizadas para você e sua família.
          <br />
          Agende sua consulta e permita-nos cuidar de você! 💙
        </p>
      </div>
    </div>

  );
}
