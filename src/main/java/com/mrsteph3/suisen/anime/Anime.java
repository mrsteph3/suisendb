package com.mrsteph3.suisen.anime;

import java.util.List;

public class Anime {
    
    private final Integer animeId;
    private final String title;
    private final String titleJapanese;
    private final List<String> titleSynonyms;
    private final String url;
    private final String type;
    private final Integer episodes;
    private final String status;
    private final String aired;
    private final String rating;
    private final Double score;
    private final Integer rank;
    private final Integer popularity;
    private final String background;
    private final List<String> producer;
    private final List<String> genre;
    private final List<String> openings;
    private final List<String> endings;
    

    public Anime(Integer animeId, String title, String titleJapanese, List<String> titleSynonyms, String url, String type, Integer episodes, String status, String aired, String rating, Double score, Integer rank, Integer popularity, String background, List<String> producer, List<String> genre, List<String> openings, List<String> endings) {
        this.animeId = animeId;
        this.title = title;
        this.titleJapanese = titleJapanese;
        this.titleSynonyms = titleSynonyms;
        this.url = url;
        this.type = type;
        this.episodes = episodes;
        this.status = status;
        this.aired = aired;
        this.rating = rating;
        this.score = score;
        this.rank = rank;
        this.popularity = popularity;
        this.background = background;
        this.producer = producer;
        this.genre = genre;
        this.openings = openings;
        this.endings = endings;
    }


    public Integer getAnimeId() {
        return this.animeId;
    }


    public String getTitle() {
        return this.title;
    }


    public String getTitleJapanese() {
        return this.titleJapanese;
    }


    public List<String> getTitleSynonyms() {
        return this.titleSynonyms;
    }

    public String getUrl() {
        return this.url;
    }


    public String getType() {
        return this.type;
    }


    public Integer getEpisodes() {
        return this.episodes;
    }


    public String getStatus() {
        return this.status;
    }


    public String getAired() {
        return this.aired;
    }


    public String getRating() {
        return this.rating;
    }


    public Double getScore() {
        return this.score;
    }


    public Integer getRank() {
        return this.rank;
    }


    public Integer getPopularity() {
        return this.popularity;
    }


    public String getBackground() {
        return this.background;
    }


    public List<String> getProducer() {
        return this.producer;
    }


    public List<String> getGenre() {
        return this.genre;
    }


    public List<String> getOpenings() {
        return this.openings;
    }


    public List<String> getEndings() {
        return this.endings;
    }


    @Override
    public String toString() {
        return "{" +
            " animeId='" + getAnimeId() + "'" +
            ", title='" + getTitle() + "'" +
            ", titleJapanese='" + getTitleJapanese() + "'" +
            ", titleSynonyms='" + getTitleSynonyms() + "'" +
            ", type='" + getType() + "'" +
            ", episodes='" + getEpisodes() + "'" +
            ", status='" + getStatus() + "'" +
            ", aired='" + getAired() + "'" +
            ", rating='" + getRating() + "'" +
            ", score='" + getScore() + "'" +
            ", rank='" + getRank() + "'" +
            ", popularity='" + getPopularity() + "'" +
            ", background='" + getBackground() + "'" +
            ", producer='" + getProducer() + "'" +
            ", genre='" + getGenre() + "'" +
            ", openings='" + getOpenings() + "'" +
            ", endings='" + getEndings() + "'" +
            "}";
    }

}
