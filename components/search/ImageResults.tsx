import React from 'react'

const ImageResults = ({ results }: { results: any }) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 px-3 space-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items?.map((result: any) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className="object-contain w-full group-hover:shadow-xl h-60"
                  src={result.link}
                  alt={result.title}
                />
              </a>
              <a className="group-hover:underline" href={result.image.contextLink}>
                <h2 className="text-xl truncate">{result.title}</h2>
              </a>
              <a className="group-hover:underline" href={result.image.contextLink}>
                <p className="text-gray-600">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="ml-16">
          <PaginationButtons/>
      </div> */}
    </div>
  )
}

export default ImageResults