const {sum}=require("./sum");
const {sub}=require("./sub");
const {mult}=require("./mult");
const {div}=require("./div")

test ("Somando 1+2 deve retornar 3",()=>{
    //cenário
    const esperado=3;

    //execução
    const resultado=sum(1,2);

    //validação
    expect(resultado).toBe(esperado);
});
test ("Subtraindo 2-1 deve retornar 1",()=>{
    //cenário
    const esperado=1;

    //execução
    const resultado=sub(2,1);

    //validação
    expect(resultado).toBe(esperado);
});
test ("Multiplicando 3*3 deve retornar 9",()=>{
    //cenário
    const esperado=9;

    //execução
    const resultado=mult(3,3);

    //validação
    expect(resultado).toBe(esperado);
});
test ("Dividindo 3/3 deve retornar 1",()=>{
    //cenário
    const esperado=1;

    //execução
    const resultado=div(3,3);

    //validação
    expect(resultado).toBe(esperado);
});

describe ("Conjunto de testes operações aritiméticas",()=>{
   it ("Somando 1+2 deve retornar 3",()=>{
        //cenário
        const esperado=3;
    
        //execução
        const resultado=sum(1,2);
    
        //validação
        expect(resultado).toBe(esperado);
    });
    it ("Subtraindo 2-1 deve retornar 1",()=>{
        //cenário
        const esperado=1;
    
        //execução
        const resultado=sub(2,1);
    
        //validação
        expect(resultado).toBe(esperado);
    });
    it ("Multiplicando 3*3 deve retornar 9",()=>{
        //cenário
        const esperado=9;
    
        //execução
        const resultado=mult(3,3);
    
        //validação
        expect(resultado).toBe(esperado);
    });
    it ("Dividindo 3/3 deve retornar 1",()=>{
        //cenário
        const esperado=1;
    
        //execução
        const resultado=div(3,3);
    
        //validação
        expect(resultado).toBe(esperado);
    });
})
