function CVV() {
  return (
    <section
      id="cvv"
      className="w-full bg-creme flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-8 border-l-4 border-red-600">
        <p className="text-red-700 font-medium text-sm sm:text-base md:text-lg">
          ⚠️ Esse site não oferece atendimento imediato
        </p>

        <h2 className="text-red-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mt-4">
          Em caso de crise, ligue para o CVV:{" "}
          <span className="whitespace-nowrap">180</span>
        </h2>

        <p className="text-darkBrown text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          Em caso de risco, vá até o hospital mais próximo, ou ligue para o{" "}
          <span className="font-semibold text-red-700">SAMU: 192</span>
        </p>
      </div>
    </section>
  );
}

export default CVV;
