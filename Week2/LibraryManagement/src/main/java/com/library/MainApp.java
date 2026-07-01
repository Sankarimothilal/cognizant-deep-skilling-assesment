package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class MainApp {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");
        
        System.out.println("Bean created by Spring IoC Container");

        BookService service = context.getBean("bookService", BookService.class);

        service.displayService();
        
        
    }

}