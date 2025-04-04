type ArbolProps = {
  className?: string;
};

export default function Arbol({ className = "" }: ArbolProps) {
  return (
    <div className={`absolute bottom-0 left-1/2 translate-x-[-50%] w-[400px] h-[600px] ${className}`}>
      {/* Tallo */}
      <img
        src="/images/tallo.png"
        alt="Tallo"
        className="absolute bottom-0 left-1/2 translate-x-[-50%] animate-tallo"
      />

      {/* Follaje izquierdo */}
      <img
        src="/images/follajeizquierdo.png"
        alt="Follaje izquierdo"
        className="absolute top-[108px] left-1/2 translate-x-[-50%] animate-follaje-left"
      />

      {/* Follaje derecho */}
      <img
        src="/images/follajederecho.png"
        alt="Follaje derecho"
        className="absolute top-[106.5px] left-1/2 translate-x-[-50.3%] animate-follaje-right"
      />

      {/* Arbusto izquierdo */}
      <img
        src="/images/arbustoizquierdo.png"
        alt="Arbusto izquierdo"
        className="absolute bottom-0 left-0 animate-arbusto-left"
      />

      {/* Arbusto derecho */}
      <img
        src="/images/arbustoderecho.png"
        alt="Arbusto derecho"
        className="absolute bottom-0 right-0 animate-arbusto-right"
      />
    </div>
  );
}
