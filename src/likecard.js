<div className='category-votes'>
                  <button
                    className={`vote-button like-button ${voteType === 'like' ? 'active' : ''}`}
                    onClick={() => handleVote(id, 'like')}
                  >
                    <i className='fas fa-thumbs-up'></i>
                  </button>
                  </div>