package com.mrsteph3.suisen.anime;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnimeService {

    private final AnimeDataAccessService animeDataAccessService;

    @Autowired
    public AnimeService(AnimeDataAccessService animeDataAccessService) {
        this.animeDataAccessService = animeDataAccessService;
    }

    public List<Anime> getAllAnime() {
        return animeDataAccessService.selectAllStudents();
    }

}
