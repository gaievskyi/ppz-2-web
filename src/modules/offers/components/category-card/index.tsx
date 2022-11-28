type CategoryCardProps = {
  name: string
  imageURL: unknown
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imageURL
}) => (
  <div
    style={{
      alignItems: 'center',
      backgroundImage: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.8)), url(${imageURL})`,
      backgroundSize: 'cover',
      borderRadius: '1em',
      display: 'flex',
      flex: '1 1 49%',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      minHeight: '400px',
      transition: 'all .5s ease',
      width: '100%'
    }}
  >
    <h1 style={{ color: 'white' }}>{name}</h1>
    <button
      style={{
        backgroundColor: '#FFE102',
        border: 'none',
        borderRadius: '1em',
        cursor: 'pointer',
        fontSize: '0.8em',
        maxWidth: '350px',
        padding: '0.7em 2em',
        textTransform: 'uppercase'
      }}
    >
      Explore
    </button>
  </div>
)
