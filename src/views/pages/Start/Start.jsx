import { useState } from 'react';
import styles from './Start.module.css';

const Start = () => {
  const [date, setDate] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [exitTime, setExitTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      date,
      entryTime,
      exitTime,
    });
  };

  return (
    <section className={styles.section}>
      <h2>Cadastro de Ponto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Data do Ponto:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="entryTime">Hora de Entrada:</label>
          <input
            type="time"
            id="entryTime"
            value={entryTime}
            onChange={(e) => setEntryTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="exitTime">Hora de Saída:</label>
          <input
            type="time"
            id="exitTime"
            value={exitTime}
            onChange={(e) => setExitTime(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit">Registrar Ponto</button>
        </div>
      </form>
    </section>
  );
};

export default Start;
