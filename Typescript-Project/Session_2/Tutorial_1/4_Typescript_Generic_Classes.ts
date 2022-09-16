// Typescript Generic classes - Generic Classes

//A generic class resembles a generic interface in appearance.
//Following the name of the class, generic classes contain a generic type parameter list enclosed in angle brackets (>).
//A class's type has two sides: a static side and an instance side.
//Generic classes are only generic on the instance side, not the static side, hence static members can't use the class's type parameter while working with the them. 

class GenericNumber<NumType>{
    zeroValue: NumType;
    add: (x: NumType, y:NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){
    return x + y;
};
//34.29