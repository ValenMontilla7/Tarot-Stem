import { useState } from "react";
import "./VirtualAssistant.css";

function VirtualAssistant() {
  const [step, setStep] = useState("start");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleImageClick = () => setStep("askEmail");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
    setShowError(false);
  };

  const handleSubmit = () => {
    if (isValid) {
      setStep("thanks");
    } else {
      setShowError(true); 
    }
  };

  return (
    <div className="assistant-wrapper">
      {}
      <img 
        src="imagenes/brujita.png"
        alt="Asistente Virtual"
        className="assistant-image"
        onClick={step === "start" ? handleImageClick : undefined}
      />

      {}
      {step === "start" && (
        <p className="assistant-question">
          ✨¡Hazme click! <br /> Para ganar una limpieza de aura✨
        </p>
      )}

      {step === "askEmail" && (
        <div className="assistant-box">
          <p className="assistant-question">
            Ingresa tu correo y te enviaremos tu cita <br />¡GRATIS!
          </p>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={handleEmailChange}
            className="assistant-input"
          />

          {showError && (
            <p style={{ color: "red", fontSize: "11px", margin: "4px 0 0" }}>
              ❌Ingresa un correo válido❌
            </p>
          )}

          <button 
            onClick={handleSubmit}
            className="btn send"
          >
            Enviar
          </button>
        </div>
      )}

      {step === "thanks" && (
        <p className="assistant-message success">
          ✨¡Perfecto!✨
        </p>
      )}
    </div>
  );
}

export default VirtualAssistant;

