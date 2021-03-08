package com.mrsteph3.suisen.anime;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class AnimeDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AnimeDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // TODO 
    // 1. Remove all backslashes from text output

    private RowMapper<Anime> mapAnimeFromDb() {
        return (resultSet, i) -> {
            Integer animeId = resultSet.getInt("anime_id");
            String title = resultSet.getString("title");
            String titleEnglish = resultSet.getString("title_english");
            String titleJapanese = resultSet.getString("title_japanese");
            String titleSynonymsString = resultSet.getString("title_synonyms");
            List<String> titleSynonyms = Arrays.asList(titleSynonymsString.replaceAll("\\\\", "").split(","));
            String url = resultSet.getString("image_url");
            String type = resultSet.getString("type");
            Integer episodes = resultSet.getInt("episodes");
            String status = resultSet.getString("status");
            String airedString = resultSet.getString("aired").replaceAll("\\\\", "");
            String rating = resultSet.getString("rating");
            Double score = resultSet.getDouble("score");
            String rankString = resultSet.getString("rank");
            Integer rank;
            try {
                rank = Integer.parseInt(rankString);
            } catch (NumberFormatException e) {
                rank = 0;
            }
            Integer popularity = resultSet.getInt("popularity");
            String background = resultSet.getString("background").replaceAll("\\\\", "");
            String producerString = resultSet.getString("producer");
            List<String> producer = Arrays.asList(producerString.replaceAll("\\\\", "").split(","));
            String genreString = resultSet.getString("genre");
            List<String> genre = Arrays.asList(genreString.replaceAll("\\\\", "").split(","));
            genre.replaceAll(String::trim);
            String openingString = resultSet.getString("opening_theme");
            List<String> openings = Arrays.asList(openingString.replaceAll("\\\\", "").split(","));
            String endingString = resultSet.getString("ending_theme");
            List<String> endings = Arrays.asList(endingString.replaceAll("\\\\", "").split(","));

            return new Anime(
                animeId,
                title,
                titleEnglish,
                titleJapanese,
                titleSynonyms,
                url,
                type,
                episodes,
                status,
                airedString,
                rating,
                score,
                rank,
                popularity,
                background,
                producer,
                genre,
                openings,
                endings
            );
        };
    }

    public List<Anime> selectAllStudents() {

        String sql = "" +
            "SELECT " +
                "* " +
            "FROM " +
                "anime;";

        return jdbcTemplate.query(sql, mapAnimeFromDb());
    }

}
