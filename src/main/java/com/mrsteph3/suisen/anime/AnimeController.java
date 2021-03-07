package com.mrsteph3.suisen.anime;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("anime")
public class AnimeController {
    
    private final AnimeService animeService;

    @Autowired
    public AnimeController(AnimeService animeService) {
        this.animeService = animeService;
    }


    @GetMapping
    public List<Anime> getAllAnime() {
        return animeService.getAllAnime();
    }

}
