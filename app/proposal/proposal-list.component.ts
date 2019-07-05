import { Component} from "@angular/core";
import { Proposal } from "./proposal";


@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.com', 'Ruby on Rails', 150, 120, 15, 'test@gmail.com')
    proposalTwo: Proposal = new Proposal(15, 'Company 2', 'http://portfolio.com', 'Ruby on Rails', 150, 120, 15, 'test@gmail.com')
    proposalThree: Proposal = new Proposal(15, 'Company 3', 'http://portfolio.com', 'Ruby on Rails', 150, 120, 15, 'test@gmail.com')

    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]
}