import { useState, useMemo } from 'react';
import { poems } from '../data/poems';
import { ExtendedCSSProperties } from '../types/styles';
import PoemCard from './PoemCard';

interface Filters {
  author: string;
  form: string;
}

export default function TableOfContents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    author: '',
    form: '',
  });
  const [sortBy, setSortBy] = useState<{ field: 'title' | 'author'; direction: 'asc' | 'desc' }>({
    field: 'title',
    direction: 'asc',
  });

  // Get unique authors with counts
  const authorOptions = useMemo(() => {
    const authorCounts = poems.reduce(
      (acc, poem) => {
        const key = `${poem.author.chinese.traditional}|${poem.author.english}`;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.entries(authorCounts)
      .map(([key, count]) => {
        const [chinese, english] = key.split('|');
        return {
          value: key,
          label: `${chinese} ${english} (${count})`,
        };
      })
      .sort((a, b) => {
        // Sort by count first (descending)
        const countDiff = (authorCounts[b.value] || 0) - (authorCounts[a.value] || 0);
        if (countDiff !== 0) return countDiff;
        // Then by English name
        return a.value.split('|')[1].localeCompare(b.value.split('|')[1]);
      });
  }, []);

  // Filter and sort poems
  const filteredAndSortedPoems = useMemo(() => {
    return poems
      .filter(poem => {
        // Search term filter (title only)
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          const matchesSearch =
            poem.title.chinese.toLowerCase().includes(searchLower) ||
            poem.title.english.toLowerCase().includes(searchLower);
          if (!matchesSearch) return false;
        }

        // Author filter
        if (filters.author) {
          const poemAuthorKey = `${poem.author.chinese.traditional}|${poem.author.english}`;
          if (poemAuthorKey !== filters.author) return false;
        }

        // Form filter
        if (filters.form && poem.form !== filters.form) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        let aValue, bValue;

        if (sortBy.field === 'title') {
          aValue = a.title.english;
          bValue = b.title.english;
        } else {
          aValue = a.author.english;
          bValue = b.author.english;
        }

        // Case-insensitive comparison
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();

        return sortBy.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });
  }, [searchTerm, filters, sortBy]);

  return (
    <div className="table-of-contents">
      <div
        style={{
          maxWidth: '1200px',
          margin: '2rem auto',
          padding: '0 0.5rem',
          '@media (min-width: 601px)': {
            padding: '0 2rem',
          } as ExtendedCSSProperties,
        }}
      >
        {/* Search Controls */}
        <div
          className="search-controls"
          style={{
            display: 'flex',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search by title..."
            style={
              {
                padding: '0.5rem 1rem',
                fontSize: '0.95rem',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'var(--color-paper)',
                color: 'var(--color-text)',
                '::placeholder': {
                  color: 'var(--color-text-secondary)',
                },
              } as ExtendedCSSProperties
            }
          />

          <select
            value={filters.author}
            onChange={e => setFilters(prev => ({ ...prev, author: e.target.value }))}
            style={
              {
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                padding: '0.5rem 2rem 0.5rem 0.75rem',
                backgroundColor: 'var(--color-paper)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                color: 'var(--color-text)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-english)',
                cursor: 'pointer',
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1em',
                minWidth: '160px',
              } as ExtendedCSSProperties
            }
          >
            <option value="">All Authors</option>
            {authorOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={`${sortBy.field}-${sortBy.direction}`}
            onChange={e => {
              const [field, direction] = e.target.value.split('-') as [
                'title' | 'author',
                'asc' | 'desc',
              ];
              setSortBy({ field, direction });
            }}
            style={
              {
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                padding: '0.5rem 2rem 0.5rem 0.75rem',
                backgroundColor: 'var(--color-paper)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                color: 'var(--color-text)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-english)',
                cursor: 'pointer',
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1em',
                minWidth: '160px',
              } as ExtendedCSSProperties
            }
          >
            <option value="title-asc">Sort by Title (A-Z)</option>
            <option value="title-desc">Sort by Title (Z-A)</option>
            <option value="author-asc">Sort by Author (A-Z)</option>
            <option value="author-desc">Sort by Author (Z-A)</option>
          </select>
        </div>

        {/* Results count */}
        <div
          className="results-count"
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-secondary)',
            opacity: 0.7,
            marginBottom: '1rem',
          }}
        >
          {filteredAndSortedPoems.length} {filteredAndSortedPoems.length === 1 ? 'poem' : 'poems'}{' '}
          found
        </div>

        {/* Poem Grid */}
        <div
          className="poem-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {filteredAndSortedPoems.map(poem => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      </div>
    </div>
  );
}
