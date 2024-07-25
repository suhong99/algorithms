package java.example;

class A{
    public A(){
        System.out.print("A");
    }
    public A(char x){
        System.out.print(x);
    }
    public void f() {
        System.out.print('1');
    }
    public static void g(){
        System.out.print("2");
    }
}

class B extends A {
    public B() {
        System.out.print("B");
    }
    public B(char x){
        System.out.print(x);
    }
    public void f(){
        System.out.print("3");
    }
    public static void g(){
        System.out.print('4');
    }
}


class C extends B{
    public C() {
        super('X');
        System.out.print("C");
    }
    public C(char x){
        System.out.print(x);
    }
    public void f(){
        System.out.print("5");
    }
    public static void g(){
        System.out.print('6');
    }
}

public class HelloWorld {
    public static void main(String[] args){
        A obj = new B();
        B obj2 = new C();
        C obj3 = new C('Z');

        System.out.println('\n');
        obj.f();
        obj2.f();
        obj3.f();
        obj.g(); // 스테틱은 hiding이라고 앞에 있는 타입을 출력.. A의 g, B의 g, C의 g 출력
        obj2.g();
        obj3.g();
    }
}