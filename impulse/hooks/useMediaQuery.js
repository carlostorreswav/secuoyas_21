import { useEffect, useState } from "react"

function useMediaQuery(query) {
  const getMatches = query => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addEventListener("change", handleChange)) {
      matchMedia.removeEventListener(handleChange)
    } else {
      matchMedia.addEventListener("change", handleChange)
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange)
      } else {
        matchMedia.removeEventListener("change", handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export default useMediaQuery
