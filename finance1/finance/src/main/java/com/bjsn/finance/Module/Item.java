package com.bjsn.finance.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
            @Id
            private int jwlno;
            private String name;
            private String fathername;
            private int principalamt;
            private LocalDate stdate;
            private String address;
            private String itemtype;
            private Long number;
            private Boolean status;

    private LocalDate currDate;
    private int months;

    private double simpleInterest;
    private double compoundInterest;



}
