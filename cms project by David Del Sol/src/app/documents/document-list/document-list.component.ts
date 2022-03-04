import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      1,
      'Learn Azure',
      'Azure Fundamentals Full Course',
      'https://www.youtube.com/watch?v=tQp1YkB2Tgs',
      null
    ),
    new Document(
      2,
      'Learn Docker',
      'Docker Tutorial',
      'https://youtu.be/pTFZFxd4hOI',
      null
    ),
    new Document(
      3,
      'Learn Kubernetes',
      'Kubernetes Crash Course',
      'https://www.youtube.com/watch?v=s_o8dwzRlu4',
      null
    ),
    new Document(
      4,
      'Learn Github Actions',
      'GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker',
      'https://youtu.be/R8_veQiYBjI',
      null
    ),
    new Document(
      5,
      'Learn Azure DevOps',
      'Deploy to Azure Kubernetes (AKS) from Azure DevOps with Azure Pipelines',
      'https://youtu.be/4Oa5HneTuKs',
      null
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
