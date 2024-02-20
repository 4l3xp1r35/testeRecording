import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export function App() {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'pt-PT' });
  const stopListening = () => SpeechRecognition.stopListening();

  const record = () => {
    if (!browserSupportsSpeechRecognition) {
      alert('O navegador não suporta reconhecimento de voz.');
      return;
    }

    if (!isMicrophoneAvailable) {
      alert('Microfone não disponível.');
      return;
    }
    console.log("deu")
    startListening();
    console.log(transcript)
  };

  const stopAndReset = () => {
    stopListening();
    resetTranscript();
  };

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <h2 className="text-3xl">Texto 1</h2>
      <p>Microfone: {listening ? 'ligado' : 'desligado'}</p>
      <span>{transcript}</span>
      <button onClick={startListening} className="bg-blue-500 h-15 w-1/2 text-2xl ms-3">Gravar</button>
      <button onClick={stopListening} className="bg-red-500 h-15 w-1/2 text-2xl ms-3">Parar de gravar</button>
    </div>
  )
}
