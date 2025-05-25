function CVV() {
  return (
    <div
      id="cvv"
      className="xs:h-[150px] xl:h-[200px] w-full bg-creme flex items-center justify-center"
    >
      <div className="h-full flex flex-wrap items-center justify-center px-2 md:px-48 lg:w-full">
        <div className="xs:w-full lg:w-full xl:w-1/2 flex flex-col justify-center items-center gap-2 text-darkBrown text-center">
          <p className="xs:text-[0.9em] md:text-[1.35em] lg:text-[1.5em]">
            Esse site não oferece atendimento imediato!
          </p>
          <p className="xs:text-[1.1em] md:text-[1.35em] lg:text-[1.5em] font-bold">
            Em caso de crise, ligue para o CVV: 180
          </p>
          <p className="xs:text-[0.9em] md:text-[1.35em] lg:text-[1.5em]">
            Em caso de risco, vá até o hospital mais próximo, ou ligue para o
            SAMU: 192
          </p>
        </div>
      </div>
    </div>
  );
}

export default CVV;
