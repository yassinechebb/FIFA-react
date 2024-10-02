import React from 'react'
import "./PlayerLists.css"
function PlayerList() {
  return (
    <div><>
    <br />
    <br />
    <br />
    <br />
    <br />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <div className="section_our_solution">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <div className="solution_card">
                <div className="hover_color_bubble" />
                <div ><img src='https://img.uefa.com/imgml/TP/players/3/2024/cutoff/63706.png'style={{width: '93px'}}/></div>
                <div className="solu_title">
                  <h3>Cristiano Ronaldo</h3>
                </div>
                <div className="solu_description">
                  <p>
                  Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano Ronaldo ou Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal (Portugal)
                  </p>
                  <button type="button" className="read_more_btn">
                    Read More
                  </button>
                </div>
              </div>
              <div className="solution_card">
                <div className="hover_color_bubble" />
                <div ><img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62bf873b-e9df-40d4-828c-afc8da770e1d/dg3dkjf-3fdf4256-9240-4f0f-9069-560f5289f601.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyYmY4NzNiLWU5ZGYtNDBkNC04MjhjLWFmYzhkYTc3MGUxZFwvZGczZGtqZi0zZmRmNDI1Ni05MjQwLTRmMGYtOTA2OS01NjBmNTI4OWY2MDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4IMTzEb-LHENJEDBRShZGgKC0GJK11ndaxjqxwQUq0k' style={{width: '93px'}}/>
                </div>
                <div className="solu_title">
                  <h3>Lionel Messi</h3>
                </div>
                <div className="solu_description">
                  <p>
                  Lionel Messi, parfois surnommé Leo Messi,
                   né le 24 juin 1987 à Rosario en Argentine, 
                   est un footballeur international argentin jouant au poste d'attaquant 
                  </p>
                  <button type="button" className="read_more_btn">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="solution_cards_box sol_card_top_3">
              <div className="solution_card">
                <div className="hover_color_bubble" />
                <div > <img src='https://b.fssta.com/uploads/application/soccer/headshots/40670.vresize.350.350.medium.72.png'style={{width: '93px'}}/>
                </div>
                <div className="solu_title">
                  <h3>Kylian Mbappé</h3>
                </div>
                <div className="solu_description">
                  <p>
                  Kylian Mbappé, né le 20 décembre 1998 à Paris, est un footballeur international français qui évolue au 
                  poste d'attaquant au Real Madrid. Considéré comme l’un des meilleurs joueurs du monde, 
                  il est reconnu pour la qualité de ses dribbles, son efficacité, sa percussion et sa très grande vitesse
                  </p>
                  <button type="button" className="read_more_btn">
                    Read More
                  </button>
                </div>
              </div>
              <div className="solution_card">
                <div className="hover_color_bubble" />
                <div > <img src='https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.34.png'style={{width: '93px'}}/>
                </div>
                <div className="solu_title">
                  <h3>Neymar</h3>
                </div>
                <div className="solu_description">
                  <p>
                  Neymar da Silva Santos Júnior, dit Neymar Jr. et plus couramment appelé Neymar, né le 5 février 1992 à Mogi das Cruzes,
                   est un footballeur international brésilien qui
                   évolue au poste d'attaquant au Al-Hilal FC. Il est considéré comme l'un des plus grands footballeurs brésiliens et du monde
                  </p>
                  <button type="button" className="read_more_btn">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default PlayerList
