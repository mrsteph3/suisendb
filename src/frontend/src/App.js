import React, { Component } from 'react';
import Container from './Container';
import Header from './Header';
import CenteredDisplay from './CenteredDisplay';
import { getAllAnime } from './client';
import { Button, Empty, Modal, Spin, Table, Tag } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';

const jikanjs  = require('jikanjs'); // Uses per default the API version 3

const indicatorIcon = <LoadingOutlined style={{ fontsize: 24 }} spin />;

class App extends Component {

  state = {
    anime: [],
    isFetching: false,
    isMoreInfoModalVisible: false,
    selectedAnime: 0,
    selectedAnimeURL: ''
  }

  componentDidMount() {
    this.fetchAnime();
  }

  openMoreInfoModal = () => {
    this.setState({ isMoreInfoModalVisible: true });
  }

  closeMoreInfoModal = () => {
    this.setState({ isMoreInfoModalVisible: false });
  }

  fetchAnime = () => {
    this.setState({
      isFetching: true
    })

    getAllAnime()
      .then(res => res.json()
        .then(anime => {
          console.log(anime);
          this.setState({
            anime,
            isFetching: false
          });
        })
      )
      .catch(error => {
        console.log(error)
        this.setState({
          isFetching: false
        });
      });
  }



  render() {

    const { anime, isFetching, isMoreInfoModalVisible, selectedAnime, selectedAnimeURL } = this.state;

    if (isFetching) {
      return (
        <Container>
          <Spin indicator={indicatorIcon} />
        </Container>
      );
    }

    if (anime && anime.length) {
      const columns = [
        {
          title: 'Anime ID',
          dataIndex: 'animeId',
          key: 'animeId',
          sorter: (a, b) => a.animeId - b.animeId,
          sortDirections: ['ascend', 'descend'],
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Format',
          dataIndex: 'type',
          key: 'type',
          filters: [
            {
              text: 'TV',
              value: 'TV',
            },
            {
              text: 'Movie',
              value: 'Movie',
            },
            {
              text: 'OVA',
              value: 'OVA',
            },
            {
              text: 'Special',
              value: 'Special',
            }
          ],
          onFilter: (value, record) => record.type.indexOf(value) === 0
        },
        {
          title: "Genres",
          dataIndex: "genre",
          key: "genre",
          render: genre => (
              <>
                {genre.map(tag => {
                  return (
                    <Tag color='blue' key={tag}>
                      {tag}
                    </Tag>
                  )
                })}
              </>
          ),
          filters: [
            {
              text: 'Action',
              value: 'Action',
            },
            {
              text: 'Adventure',
              value: 'Adventure',
            },
            {
              text: 'Cars',
              value: 'Cars',
            },
            {
              text: 'Comedy',
              value: 'Comedy',
            },
            {
              text: 'Demons',
              value: 'Demons',
            },
            {
              text: 'Mystery',
              value: 'Mystery',
            },
            {
              text: 'Drama',
              value: 'Drama',
            },
            {
              text: 'Ecchi',
              value: 'Ecchi',
            },
            {
              text: 'Fantasy',
              value: 'Fantasy',
            },
            {
              text: 'Game',
              value: 'Game',
            },
            {
              text: 'Hentai',
              value: 'Hentai',
            },
            {
              text: 'Historical',
              value: 'Historical',
            },
            {
              text: 'Horror',
              value: 'Horror',
            },
            {
              text: 'Kids',
              value: 'Kids',
            },
            {
              text: 'Magic',
              value: 'Magic',
            },
            {
              text: 'Martial Arts',
              value: 'Martial Arts',
            },
            {
              text: 'Mecha',
              value: 'Mecha',
            },
            {
              text: 'Music',
              value: 'Music',
            },
            {
              text: 'Parody',
              value: 'Parody',
            },
            {
              text: 'Samurai',
              value: 'Samurai',
            },
            {
              text: 'Romance',
              value: 'Romance',
            },
            {
              text: 'School',
              value: 'School',
            },
            {
              text: 'Sci-Fi',
              value: 'Sci-Fi',
            },
            {
              text: 'Shoujo',
              value: 'Shoujo',
            },
            {
              text: 'Shoujo Ai',
              value: 'Shoujo Ai',
            },
            {
              text: 'Shounen',
              value: 'Shounen',
            },
            {
              text: 'Shounen Ai',
              value: 'Shounen Ai',
            },
            {
              text: 'Space',
              value: 'Space',
            },
            {
              text: 'Sports',
              value: 'Sports',
            },
            {
              text: 'Super Power',
              value: 'Super Power',
            },
            {
              text: 'Vampire',
              value: 'Vampire',
            },
            {
              text: 'Yaoi',
              value: 'Yaoi',
            },
            {
              text: 'Yuri',
              value: 'Yuri',
            },
            {
              text: 'Harem',
              value: 'Harem',
            },
            {
              text: 'Slice of Life',
              value: 'Slice of Life',
            },
            {
              text: 'Supernatural',
              value: 'Supernatural',
            },
            {
              text: 'Military',
              value: 'Military',
            },
            {
              text: 'Police',
              value: 'Police',
            },
            {
              text: 'Psychological',
              value: 'Psychological',
            },
            {
              text: 'Thriller',
              value: 'Thriller',
            },
            {
              text: 'Seinen',
              value: 'Seinen',
            },
            {
              text: 'Josei',
              value: 'Josei',
            }
          ],
          filterMultiple: true,
          onFilter: (value, record) => {
            return record.genre.includes(value)
          }
        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
          filters: [
            {
              text: 'G',
              value: 'G - All Ages',
            },
            {
              text: 'PG',
              value: 'PG - Children',
            },
            {
              text: 'PG-13',
              value: 'PG-13 - Teens 13 or older',
            },
            {
              text: 'R-17+',
              value: 'R - 17+ (violence & profanity)',
            },
            {
              text: 'Rx',
              value: 'Rx - Hentai',
            }
          ],
          onFilter: (value, record) => record.rating.indexOf(value) === 0
        },
        {
          title: 'Score',
          dataIndex: 'score',
          key: 'score',
          sorter: (a, b) => {
            return (b.score !== null) - (a.score !== null) || a.score - b.score;
          },
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Rank',
          dataIndex: 'rank',
          key: 'rank',
          sorter: (a, b) => {
            return (b.rank !== 0) - (a.rank !== 0) || a.rank - b.rank;
          },
          sortDirections: ['ascend', 'descend'],
        },
        {
          title: 'Popularity',
          dataIndex: 'popularity',
          key: 'popularity',
          sorter: (a, b) => {
            return (b.popularity !== 0) - (a.popularity !== 0) || a.popularity - b.popularity;
          },
          sortDirections: ['ascend', 'descend'],
          defaultSortOrder: 'ascend'
        },
        {
          title: '',
          key: 'moreinfo',
          render: (record) => (
            <Button 
            onClick={() => {
                this.setState({isMoreInfoModalVisible: true}); 
                let aid = record;
                this.setState({selectedAnime: aid});
                jikanjs.loadAnime(record.animeId).then((response) => {
                  this.setState({selectedAnimeURL: response['image_url']});
                }).catch((err) => {
                  console.log(err);
                });
                
            }}
            type="primary">Details</Button>
          )
        }
      ];

      return (
        <div>
          <Header />
          <Modal
            title='More Information'
            visible={isMoreInfoModalVisible}
            onOk={this.closeMoreInfoModal}
            onCancel={this.closeMoreInfoModal}
            width={1000}>

              <CenteredDisplay>
              
              <img alt={selectedAnime['title']} src={selectedAnimeURL} />
              <h1>{selectedAnime['title']}</h1>
              <p>{selectedAnime['titleJapanese']}</p>
              <p>{selectedAnime['background']}</p>
              </CenteredDisplay>
              <ul>
              <li><b>Type:</b> {selectedAnime['type']}</li>
              <li><b>Number of episodes:</b> {selectedAnime['episodes']}</li>
              <li><b>Status:</b> {selectedAnime['status']}</li>
              <li><b>Aired:</b> {selectedAnime['aired']}</li>
              <li><b>Rating:</b> {selectedAnime['rating']}</li>
              <li><b>Score:</b> {selectedAnime['score']}</li>
              <li><b>Rank:</b> {selectedAnime['rank']}</li>
              <li><b>Popularity:</b> {selectedAnime['popularity']}</li>
              <li><b>Producer(s):</b> {selectedAnime['producer']}</li>
              </ul>

          </Modal>
          <Container>
            <Table
              dataSource={anime}
              columns={columns}
              pagination={true}
              rowKey='animeId' />
          </Container>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <Container>
          <Empty description= {
            <h1>No anime found</h1>
          } />
        </Container>
      </div>
    )

  }

}

export default App;
