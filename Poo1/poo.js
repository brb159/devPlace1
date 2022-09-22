
// --- POO ---

class Password{
    constructor(longitud, contraseña){
        const properties ={
        _longitud : longitud,
        _contraseña : contraseña
        }
        _private.set(this, {properties});
    }
        esFuerte(){
        }
        generarPassword(){
        }
        get datos(){
            return _private.get(this).properties["_longitud"];
            return _private.get(this).properties["_contraseña"];
        }
        set long(nuevalong){
            return _private.set(this).properties["_longitud"] = nuevalong ;
        }
    };
