import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { RepositoryInfo, Issues, HeaderLink } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [reposirory, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <HeaderLink>
        <Link to="/">
          <FiChevronLeft size={17} />
          voltar
        </Link>
      </HeaderLink>

      {reposirory && (
        <RepositoryInfo>
          <header>
            <img
              src={reposirory.owner.avatar_url}
              alt={reposirory.owner.login}
            />
            <div>
              <strong>{reposirory.full_name}</strong>
              <p>{reposirory.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{reposirory.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{reposirory.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{reposirory.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={issue.html_url}
            key={issue.id}
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
