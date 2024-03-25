import './Button.css';

export function Button({value , event}) {
  return (
    <button onClick={event} className="Button">{value}</button>
  );
}

