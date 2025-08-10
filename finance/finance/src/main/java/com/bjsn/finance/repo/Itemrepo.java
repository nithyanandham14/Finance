package com.bjsn.finance.repo;

import com.bjsn.finance.Module.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Itemrepo extends JpaRepository<Item,Integer> {
}
