package com.tomaszdziurko.reading;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Main {

    public static final DateTimeFormatter DAY_MONTH_FORMATTER = DateTimeFormatter.ofPattern("dd/MM");
    private LocalDate startDate;
    private int pages;
    private int pagesPerDay;

    public static void main(String[] args) {

        Main main = new Main("01/01/2018", 336, 10);

        main.run();
    }

    public Main(String dateString, int pages, int pagesPerDay) {
        this.pagesPerDay = pagesPerDay;
        startDate = DateTimeFormatter.ofPattern("dd/MM/yyyy").parse(dateString, LocalDate::from);
        this.pages = pages;
    }

    public void run() {

        LocalDate currentDate = LocalDate.from(startDate);
        int currentPage = pages;
        String currentValue = pages + "";
        do {
            String dateString = currentDate.format(DAY_MONTH_FORMATTER);

            System.out.println(String.format("['%5s',   %4s,  %4s], ", dateString, currentPage, currentValue));
            currentPage = currentPage - pagesPerDay;
            currentDate = currentDate.plusDays(1);
            currentValue = "null";
            if (currentPage <= 0) {
                System.out.println(String.format("['%5s',   %4s,  %4s]", currentDate.format(DAY_MONTH_FORMATTER), 0, currentValue));
            }
        } while(currentPage > 0);
    }
}
