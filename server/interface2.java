import java.io.*;
interface camera{
    void display();
    void recording();
}
interface wifi{
    void connect();
    void disconnect();
}

class parent{

  public  void phonenumber(){
        System.out.println("8239183732");
    }
}
class smartphone extends parent implements camera,wifi{
 public   void display(){
        System.out.println("display of camera details");
    }
   public void recording(){
    System.out.println("recording camera");
   }
   public void connect(){
    System.out.println("connect wifi");
   }
   public void disconnect(){
    System.out.println("disconnect wifi");
   }
}

class interface2{
    public static void main(String args[]){
        smartphone s=new smartphone();
        s.display();
        s.recording();
        s.connect();
        s.disconnect();
    }
}