<div className='category-votes'>
<button
                    className={`vote-button dislike-button ${voteType === 'dislike' ? 'active' : ''}`}
                    onClick={() => handleVote(id, 'dislike')}
                  >
                    <i className='fas fa-thumbs-down'></i>
                  </button>
                  </div>
                