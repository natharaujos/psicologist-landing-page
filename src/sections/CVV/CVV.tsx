function CVV() {
  return (
    <section
      id="cvv"
      className="w-full bg-creme flex items-center justify-center py-6 px-4 sm:py-12 sm:px-8"
      style={{ minHeight: '150px' }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 text-darkBrown text-center px-4">
        <div className="flex-1">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Esse site não oferece atendimento imediato!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-3">
            Em caso de crise, ligue para o CVV: <span className="whitespace-nowrap">180</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-3">
            Em caso de risco, vá até o hospital mais próximo, ou ligue para o SAMU:{' '}
            <span className="whitespace-nowrap">192</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default CVV
