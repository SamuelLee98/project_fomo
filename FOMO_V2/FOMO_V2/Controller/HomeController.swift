//
//  ViewController.swift
//  FOMO_V2
//
//  Created by Samuel Kyu-Seo Lee on 12/20/18.
//  Copyright © 2018 Samuel Kyu-Seo Lee. All rights reserved.
//

import UIKit

class HomeController: UICollectionViewController, UICollectionViewDelegateFlowLayout {
    
    var events: [Event] = {
        
        var fomoChannel = Channel ()
        fomoChannel.name = "FOMO"
        fomoChannel.profileImageName = "fomo_logo"
        
        var viterbiChannel = Channel()
        viterbiChannel.name = "Viterbi"
        viterbiChannel.profileImageName = "USCViterbi"
        
        
        var spring2019CareerFairEvent = Event()
        spring2019CareerFairEvent.title = "Viterbi Spring 2019 Career Fair"
        spring2019CareerFairEvent.thumbNailImageName = "viterbi_careerfair"
        spring2019CareerFairEvent.channel = viterbiChannel
        spring2019CareerFairEvent.date = "Jan 25th, 2019"
        
        var facebookCodingWorkshopEvent = Event()
        facebookCodingWorkshopEvent.title = "Facebook - Coding Workshop"
        facebookCodingWorkshopEvent.thumbNailImageName = "facebook_logo"
        facebookCodingWorkshopEvent.channel = fomoChannel
        facebookCodingWorkshopEvent.date = "Jan 19th, 2019"
        
        
        return [spring2019CareerFairEvent, facebookCodingWorkshopEvent]
    }()
    
    func fetchEvents() {
        let url = NSURL(string: <#T##String#>)
        URLSession.sharedSession().dataTaskWithURL(url: https://drive.google.com/a/usc.edu/uc?id=1218_ipZJAQHcZaaLMjsUWKEoL0t50LV6&export=download) //feed application url to fetch json
    }

    override func viewDidLoad() {
        
        super.viewDidLoad()
        
        fetchEvents()
        
        navigationItem.title = "Home"
        navigationController?.navigationBar.isTranslucent = false
        
        let titleLabel = UILabel(frame:  CGRect(x: 0, y: 0, width: view.frame.width - 32, height: view.frame.height))
        navigationItem.titleView = titleLabel
        titleLabel.text = "Home"
        titleLabel.textColor = UIColor.white
        titleLabel.font = UIFont.systemFont(ofSize: 20)
        
        collectionView?.backgroundColor = UIColor.white
        collectionView.register(EventCell.self, forCellWithReuseIdentifier: "cellId")
        
        collectionView?.contentInset = UIEdgeInsets(top: 50, left: 0, bottom: 0, right: 0)
        collectionView?.scrollIndicatorInsets = UIEdgeInsets(top: 50, left: 0, bottom: 0, right: 0)
        
        setUpMenuBar()
        setUpNavBarButtons()
    }
    
    func setUpNavBarButtons() {
        let searchImage = UIImage(named:"search")?.withRenderingMode(.alwaysOriginal).resizeImage(newWidth: 20)
        
        let searchBarButtonItem = UIBarButtonItem(image: searchImage, style: .plain, target: self, action: #selector(handleSearch))
       // searchImage.size
        navigationItem.rightBarButtonItems = [searchBarButtonItem]
        navigationItem.rightBarButtonItem?.tintColor = UIColor.white;
    }
    
    @objc func handleSearch () {
        print(123)
    }
    
    let menuBar: MenuBar = {
        let mb = MenuBar()
        return mb
    }()
    
    private func setUpMenuBar() {
        view.addSubview(menuBar)
        view.addConstraintsWithFormat(format: "H:|[v0]|", views: menuBar)
        view.addConstraintsWithFormat(format: "V:|[v0(50)]|", views: menuBar)
    }
    
    override func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return events.count
    }
    override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "cellId", for: indexPath) as! EventCell
        cell.event = events[indexPath.item]
    
        return cell
    }
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let height = (view.frame.width - 16 - 16) * 9/16
        return CGSize(width: view.frame.width, height: height + 16 + 88)
    }
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 0;
    }
    
}
