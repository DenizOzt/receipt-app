package com.receipt.example;


import java.util.Collections;
import java.util.Date;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class ExampleApplication {

    
	public static void main(String[] args) {
		SpringApplication.run(ExampleApplication.class, args);
    }
    
    @Bean
    public ApplicationRunner init(ReceiptRepository repository) {
        return (args) -> {
            /* repository.save(new Receipt("Jack", "10/12/1997", 12, "Person", 8, 51));
			repository.save(new Receipt("Chloe", "10/12/1997", 22, "Person", 8, 52));
			repository.save(new Receipt("Kim", "10/12/1997", 15, "Person", 8, 53));
			repository.save(new Receipt("David", "10/12/1997", 72, "Person", 8, 54));
			repository.save(new Receipt("Michelle", "10/12/1997", 14, "Person", 8, 55));

			repository.findAll().forEach(System.out::println); */
        };
    }


	@Bean   
    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
	}
	
}


